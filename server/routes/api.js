let todos = require('./api/todos');
// const cors = require('cors')

module.exports = (app) => {
  // app.use(cors());
  app.use('/api/todos', todos)
}
