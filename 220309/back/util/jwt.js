require('dotenv').config();
const crypto = require('crypto');

const salt = process.env.SALT || 'ingoo';

function encoding(value) {
  return Buffer.from(JSON.stringify(value))
    .toString('base64')
    .replace(/[=]/g, '');
}

function createSignature(header, payload) {
  const encoding = `${header}.${payload}`;
  const signature = crypto
    .createHmac('sha256', salt)
    .update(encoding)
    .digest('base64')
    .replace(/[=]/g, '');
  return signature;
}

function createToken(state) {
  const header = {
    tpy: 'JWT',
    alg: 'HS256',
  };

  const payload = {
    ...state,
  };

  const encodingHeader = encoding(header);
  const encodingPayload = encoding(payload);
  const signature = createSignature(encodingHeader, encodingPayload);

  return `${encodingHeader}.${encodingPayload}.${signature}`;
}

module.exports = {
  createToken,
  createSignature,
};
