const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const secret = 'dasgoodshitman!'

const tokens = {
  '_id': mongoose.Types.ObjectId(),
}

const hashed = jwt.sign(JSON.stringify(tokens), secret);
const verified = jwt.verify(hashed, secret);

console.log('tokens: ', tokens);
console.log('hashed: ', hashed);
console.log('verified: ', verified);
