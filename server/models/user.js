const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys.js');
const pick = require('lodash.pick');

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    trim: true,
    minlength: 1,
    unique: true,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  name: {
    type: String
  },
  password: {
    type: String,
    minlength: 6
  },
  googleId: {
    type: String,
    unique: true
  },
  tokens: [
    {
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
});

UserSchema.methods.generateAuthToken = function() {
  let user = this;
  let access = 'auth';
  let token = jwt
    .sign(
      {
        _id: user._id.toHexString(),
        access
      },
      keys.auth.secret
    )
    .toString();

  user.tokens = user.tokens.concat([{ access, token }]);

  return user
    .save()
    .then(() => token)
    .catch(err => {
      throw err;
    });
};

UserSchema.methods.toJSON = function() {
  let user = this;
  let userObject = user.toObject();
  return pick(userObject, ['_id', 'email', 'name']);
};

UserSchema.methods.removeToken = function(token) {
  let user = this;
  return user.update({
    $pull: {
      tokens: {
        token
      }
    }
  });
};

UserSchema.statics.findByToken = function(token) {
  let User = this;
  let decoded;

  try {
    decoded = jwt.verify(token, keys.auth.secret);
  } catch (err) {
    return Promise.reject();
  }

  return User.findOne({
    _id: decoded._id,
    'tokens.access': 'auth',
    'tokens.token': token
  });
};

const User = mongoose.model('User', UserSchema);
module.exports = { User };
