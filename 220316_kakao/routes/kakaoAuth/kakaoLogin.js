const express = require('express');
const axios = require('axios');
const qs = require('qs');

const { makeToken } = require('../../util/jwt.js');
const { auth } = require('../../middleware/auth.js');
const alertmove = require('../../util/alertmove.js');

const router = express.Router();

const kakaoOpt = {
  clientId: 'ec36871bc340fc1ef5bb0a861f1f9d7e',
  clientSecret: 'hf6QCKrfTS9v4PZeQTDxO7HYVeDfzhio',
  redirectUri: 'http://localhost:3000/auth/kakao/callback',
};

router.get('/kakao', (req, res) => {
  const kakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoOpt.clientId}&redirect_uri=${kakaoOpt.redirectUri}&response_type=code`;
  res.redirect(kakaoLoginURL);
});

router.get('/kakao/callback', async (req, res) => {
  let token;
  try {
    const url = 'https://kauth.kakao.com/oauth/token';
    const body = qs.stringify({
      grant_type: 'authorization_code',
      client_id: kakaoOpt.clientId,
      client_secret: kakaoOpt.clientSecret,
      redirectUri: kakaoOpt.redirectUri,
      code: req.query.code,
    });
    const header = { 'content-type': 'application/x-www-form-urlencoded' };
    const response = await axios.post(url, body, header);
    token = response.data.access_token;
  } catch (err) {
    console.log(err);
    console.log('에러1');
    res.send('에러1');
  }

  try {
    const url = 'https://kapi.kakao.com/v2/user/me';
    const Header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(url, Header);
    const { nickname, profile_image: img } = response.data.properties;
    const payload = { nickname, img };
    const accessToken = makeToken(payload);
    const cookiOpt = { maxAge: 1000 * 60 * 60 * 24 };
    res.cookie('accessToken', accessToken, cookiOpt);
    res.send(alertmove('/', `${nickname}님 로그인 되었습니다^^`));
  } catch (err) {
    console.log(err);
  }
});

router.get('/info', auth, (req, res) => {
  const { user } = req;

  res.render('info.html', { user });
});

module.exports = router;
