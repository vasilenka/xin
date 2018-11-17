const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();
const { Todo } = require('../../models/Todo');
var ObjectId = mongoose.Types.ObjectId;

const {authenticate} = require('../../middlewares/authenticate');

const pick = require('lodash.pick');
const isBoolean = require('lodash.isboolean');

route.get('/', authenticate, (req, res) => {
  Todo.find({
    _creator: req.user._id
  }).then(todos => {
    if(!todos) {
      return Promise.reject();
    }
    res.status(200).send({ todos });
  }).catch(e => {
    res.status(404).send(e)
  })
})

route.post('/', authenticate, (req, res) => {

  let body = pick(req.body, ['text']);
  let todo = new Todo({
    ...body,
    _creator: req.user._id
  });

  todo.save().then(todo => {
    if(!todo) {
      return Promise.reject();
    }
    res.status(200).send({todo});
  }).catch(e => {
    res.status(400).send(e)
  })

})

route.get('/:id', authenticate, (req, res) => {
  let id = req.params.id;
  if(!ObjectId.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then(todo => {
    if(!todo) {
      return Promise.reject();
    }
    res.send({todo})
  }).catch(e => {
    res.status(404).send(e)
  })
})

route.patch('/:id', authenticate, (req, res) => {
  let id = req.params.id;
  let body = pick(req.body, ['text', 'completed']);

  if(!ObjectId.isValid(id)) {
    return res.status(404).send();
  }

  if(isBoolean(body.completed) && body.completed) {
    body.updatedAt = new Date().getTime();
    body.completedAt = new Date().getTime();
  } else {
    body.updatedAt = new Date().getTime();
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then(todo => {
    if(!todo) {
      return Promise.reject();
    }
    res.send({todo})
  }).catch(e => {
    res.status(400).send(e)
  })
})

route.delete('/:id', authenticate, (req, res) => {
  let id = req.params.id;
  if(!ObjectId.isValid(id)) {
    return res.status(404).send()
  }
  Todo.findByIdAndDelete(id).then(todo => {
    if(!todo) {
      return Promise.reject();
    }
    res.send(todo)
  }).catch(e => {
    res.status(404).send(e);
  })
})

module.exports = route;
