const express = require('express');

const kakaoRouter = require('./kakaoAuth/kakaoLogin.js');
const alertmove = require('../util/alertmove.js');
const { mainAuth, unAuth } = require('../middleware/auth.js');

const router = express.Router();

router.use('/auth', kakaoRouter);

router.get('/', mainAuth, (req, res) => {
  const { user } = req;
  if (!user) {
    res.render('index.html');
    return;
  }
  res.render('index.html', { user });
});

router.get('/logout', unAuth, (req, res) => {
  res.clearCookie('accessToken');
  res.send(alertmove('/', '로그아웃 됨'));
});

module.exports = router;
