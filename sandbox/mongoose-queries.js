const mongoose = require('./../server/services/mongoose');
const { Todo } = require('../server/models/Todo');

const id = '5befcc2832d89f0acfa8da9e';

Todo.find({
  _id: id
}).then(todos => {
  if(!todos) {
    return console.log('not found!')
  }
  console.log(todos)
}).catch(e => {
  console.log(e);
})
