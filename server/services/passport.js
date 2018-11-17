const passport = require('passport');
const GoogleStartegy = require('passport-google-oauth20').Strategy;
const keys = require('./../config/keys');
const { User } = require('../models/User');

const passportGoogleConfig = {
  clientID: keys.google.clientId,
  clientSecret: keys.google.clientSecret,
  callbackURL: '/auth/google/callback'
};

passport.use(
  new GoogleStartegy(
    passportGoogleConfig,
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        let user = existingUser;
        if (existingUser.tokens.length === 0) {
          user.generateAuthToken();
          return done(null, user);
        } else {
          return done(null, user);
        }
      }

      let user = new User({
        email: profile.emails[0].value,
        googleId: profile.id,
        name: profile.displayName
      });

      let newUser = await user.save();
      newUser.generateAuthToken();
      done(null, user);
    }
  )
);
