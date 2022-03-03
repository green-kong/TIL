const crypto = require('crypto');

function encoding(val) {
  return Buffer.from(JSON.stringify(val)).toString('base64').replace(/=/g, '');
}

function decoding(val) {
  return JSON.parse(Buffer.from(val, 'base64').toString());
}

function generateSign(eh, ep) {
  return crypto
    .createHmac('sha256', Buffer.from(process.env.JWT_PW))
    .update(`${eh}.${ep}`)
    .digest('base64')
    .replace(/=/g, '');
}

function generateJwt(state) {
  const header = {
    alg: 'HS256',
    typ: 'jwt',
  };

  const payload = {
    ...state,
  };

  const encodingHeader = encoding(header);
  const encodingPayload = encoding(payload);

  const signature = generateSign(encodingHeader, encodingPayload);

  return `${encodingHeader}.${encodingPayload}.${signature}`;
}

module.exports = { generateJwt, generateSign, decoding };
