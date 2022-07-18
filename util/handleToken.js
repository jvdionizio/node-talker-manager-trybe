const crypto = require('crypto');

function handleToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = handleToken;