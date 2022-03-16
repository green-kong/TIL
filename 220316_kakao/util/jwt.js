require('dotenv').config();

const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;
const algorithm = process.env.JWT_ALG;
const expiresIn = process.env.JWT_EXP;
const issuer = process.env.JWT_ISSUER;

const option = { algorithm, expiresIn, issuer };

function makeToken(payload) {
  return jwt.sign(payload, secretKey, option);
}

function decodePayload(token) {
  return jwt.verify(token, secretKey);
}

module.exports = { makeToken, decodePayload };
