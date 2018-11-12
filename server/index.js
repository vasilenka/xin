const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
// const {cors} = require('./middlewares/cors');

// Connect to database
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

// Initiate express
const app = express();

// Middleware
// app.use(cors);
app.use(passport.initialize());
require('./services/passport');

// Routes
app.get('/', (req, res) => {
  res.send({
    hi: 'there!'
  });
});

app.use('/auth', require('./routes/authGoogleRoutes'));

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Xin is starting at ${PORT}`);
});
