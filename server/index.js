const express = require('express');
const keys = require('./config/keys');
const passport = require('passport');
const bodyParser = require('body-parser');
// const {cors} = require('./middlewares/cors');
const { mongoose } = require('./services/mongoose');

// Initiate express
const app = express();

// Middleware
// app.use(cors);
app.use(bodyParser.json());
app.use(passport.initialize());
require('./services/passport');

// Routes
app.get('/', (req, res) => {
  res.send({
    hi: 'there!'
  });
});

app.use('/auth', require('./routes/authGoogleRoutes'));
app.use('/todos', require('./routes/todos'));

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Xin is starting at ${PORT}`);
});
