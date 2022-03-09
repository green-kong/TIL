const cookieParser = require('cookie-parser');

const { createSignature } = require('../util/jwt.js');

exports.auth = (req, res, next) => {
  const { token } = req.cookies.AccessToken;
  try {
    const [header, payload, sign] = token.split('.');
    const signature = createSignature(header, payload);
    if (signature !== sign) throw new Error('Token error');

    const user = JSON.parse(Buffer.from(payload, 'base64').toString('utf-8'));
    req.user = {
      ...user,
    };
  } catch (e) {
    console.log(e);
  }

  next();
};
