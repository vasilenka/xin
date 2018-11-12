const express = require('express');
const route = express.Router();
const passport = require('passport');
const querystring = require('querystring');

const { authenticate } = require('./../middlewares/authenticate');

route.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

route.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    let token = req.user.tokens[0].token;
    const query = querystring.stringify({
      token
    });
    res.header('x-auth', token).redirect(`/?${query}`);
  }
);

route.get('/me', authenticate, (req, res) => {
  res.send(req.user);
});

route.delete('/me/logout', authenticate, async (req, res) => {
  let removed = await req.user.removeToken(req.token);
  if (!removed) {
    res.status(400).send();
  }
  res.status(200).send(req.user);
});

// Don't use object destructure here!
module.exports = route;
