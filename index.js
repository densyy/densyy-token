/* ---- Requires ---- */

const jwt = require('jsonwebtoken')

/* ---- Methods ---- */

async function generateToken (data, secret, expiresIn = '7d') {
  const options = { expiresIn }
  return jwt.sign({ data }, secret, options)
}

async function verifyToken (token, secret) {
  const callback = (error) => (error === null)
  return jwt.verify(token, secret, null, callback)
}

async function getData (token, secret) {
  return jwt.verify(token, secret)
}

module.exports = {
  generateToken,
  verifyToken,
  getData
}
