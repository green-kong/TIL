const alertmove = require('../util/alertmove.js');

exports.Auth = (req, res, next) => {
  const token = req.cookies.user;
  if (token !== undefined) {
    next();
  } else {
    res.send(alertmove('/login', '로그인하고 오세요'));
  }
};
