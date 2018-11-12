module.exports = {
  mongo: {
    uri: 'mongodb://<url>:<port>/<db-name>'
  },
  google: {
    clientId: 'google-client-id',
    clientSecret: 'google-client-secret'
  },
  auth: {
    type: 'auth',
    issuer: 'auth',
    audience: 'auth',
    secret: 'your-own-secret'
  }
};
