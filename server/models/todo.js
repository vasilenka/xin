const mongoose = require('mongoose');
const { Schema } = mongoose;
var ObjectId = mongoose.Schema.Types.ObjectId;

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false,
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now()
  // },
  updatedAt: {
    type: Number,
    default: null
  },
  completedAt: {
    type: Number,
    default: null
  },
  _creator: {
    type: ObjectId,
    required: true
  }
})

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = { Todo };
