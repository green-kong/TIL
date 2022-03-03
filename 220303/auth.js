const { generateSign, decoding } = require('./util/jwt_generator.js');

exports.Auth = (req, res, next) => {
  try {
    const { AccessToken } = req.cookies;
    if (AccessToken === undefined) {
      next();
      return;
    }

    const [header, payload, sign] = AccessToken.split('.');
    const signCheck = generateSign(header, payload);

    if (sign === signCheck) {
      const user = decoding(payload);
      req.user = {
        ...user,
      };
      next();
    } else {
      alert('??쿠키조작함??');
      next();
    }
  } catch (err) {
    throw new Error(err);
  }
};
