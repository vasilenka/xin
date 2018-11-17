const mongoose = require('mongoose');
const keys = require('./../config/keys');

// Connect to database
mongoose.Promise = global.Promise;
try {
  mongoose.connect(
    keys.mongo.uri,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  );
} catch (err) {
  throw err;
}

module.exports = { mongoose }
