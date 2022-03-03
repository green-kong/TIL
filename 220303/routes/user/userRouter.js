const express = require('express');
const pool = require('../../model/db/db_pool.js');
const { generateJwt } = require('../../util/jwt_generator.js');
const { Auth } = require('../../auth.js');

const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login.html');
});

router.post('/login', async (req, res) => {
  const { userid, userpw } = req.body;
  const conn = await pool.getConnection();
  const sql = `SELECT * FROM user WHERE userid='${userid}' AND userpw='${userpw}'`;
  try {
    const [[result]] = await conn.query(sql);
    const { userid, username, alias } = result;

    if (result === undefined) {
      res.send('로그인 실패');
      return;
    }

    const payload = {
      userid,
      username,
      alias,
    };

    const token = generateJwt(payload);
    const tokenOpt = {
      path: '/',
    };
    res.cookie('AccessToken', token, tokenOpt);
    res.redirect('/');
  } catch (err) {
    throw new Error(err);
  }
});

router.get('/profile', Auth, async (req, res) => {
  const { userid } = req.user;
  const conn = await pool.getConnection();
  try {
    const sql = `SELECT * FROM user WHERE userid='${userid}'`;
    const [[user]] = await conn.query(sql);
    res.render('profile.html', { user });
  } catch (err) {
    throw new Error(err);
  } finally {
    conn.release();
  }
});

router.get('/logout', Auth, (req, res) => {
  res.clearCookie('AccessToken', { path: '/' });
  res.redirect('/');
});
module.exports = router;
