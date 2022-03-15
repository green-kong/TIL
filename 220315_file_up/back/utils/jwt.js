require('dotenv').config();
const crypto = require('crypto'); // 뭐 하는 애지? hashing (암호화 해주는 애다.)
const salt = process.env.SALT || 'ingoo';

function createToken(state) {
  // JWT 필요한 필수요소 header . payload . signature
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

function encoding(value) {
  return Buffer.from(JSON.stringify(value))
    .toString('base64')
    .replace(/[=]/g, '');
}

function checkToken(token) {
  const [header, payload, signature] = token.split('.');
  const check = createSignature(header, payload);
  return check === signature;
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

function decodePayload(token) {
  const [, payload] = token.split('.');
  return JSON.parse(Buffer.from(payload, 'base64').toString());
}

module.exports = {
  createToken,
  createSignature,
  checkToken,
  decodePayload,
};
