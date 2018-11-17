const express = require('express');
const route = express.Router();
const { Todo } = require('./../models/todo');
const pick = require('lodash.pick');

route.get('/', (req, res) => {

})

route.post('/', (req, res) => {

  let reqBody = pick(req.body, ['text']);
  let todo = new Todo(reqBody);

  todo.save().then(doc => {
    if(!doc) {
      Promise.reject();
    }
    res.status(200).send(doc);
  }).catch(e => {
    res.status(400).send(e)
  })
})

module.exports = route;

