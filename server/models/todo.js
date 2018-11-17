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
  user: {
    type: ObjectId
  },
  completed: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  completed_at: {
    type: Date
  }
})

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = { Todo };
