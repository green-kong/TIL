require('dotenv').config();
const express = require('express');
const passport = require('passport');

const { makeToken } = require('../../utils/jwt/jwt.js');

const router = express.Router();

router.get('/kakao', passport.authenticate('kakao'));

router.get(
  '/kakao/callback',
  passport.authenticate('kakao', { session: false }),
  (req, res) => {
    const payload = { ...req.user };
    const token = makeToken(payload);
    res.cookie('access_token', token);
    res.redirect('http://localhost:3001');
  }
);

router.get('/naver', passport.authenticate('naver', { authType: 'reprompt' }));

router.get(
  '/naver/callback',
  passport.authenticate('naver', { session: false }),
  (req, res) => {
    const payload = { ...req.user };
    const token = makeToken(payload);
    res.cookie('access_token', token);
    res.redirect('http://localhost:3001');
  }
);

module.exports = router;
