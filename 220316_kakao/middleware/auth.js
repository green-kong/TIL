const { decodePayload } = require('../util/jwt.js');
const alertmove = require('../util/alertmove.js');

const mainAuth = (req, res, next) => {
  const { accessToken } = req.cookies;
  if (accessToken !== undefined) {
    const user = decodePayload(accessToken);
    req.user = user;
  }
  next();
};

const auth = (req, res, next) => {
  const { accessToken } = req.cookies;
  if (accessToken !== undefined) {
    const user = decodePayload(accessToken);
    req.user = user;
    next();
  } else {
    res.send(alertmove('/', '로그인하세여'));
  }
};

const unAuth = (req, res, next) => {
  const { accessToken } = req.cookies;
  if (accessToken !== undefined) {
    next();
  } else {
    res.send(alertmove('/', '로그아웃 후에 이용가능 합니다.'));
  }
};

module.exports = { mainAuth, auth, unAuth };
