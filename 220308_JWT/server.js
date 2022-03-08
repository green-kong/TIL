require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const pool = require('./model/db/db.js');
const alertmove = require('./util/alertmove.js');
const { makeToken, decodePayload } = require('./util/jwt.js');
const { Auth } = require('./middleware/Auth.js');

const app = express();

app.set('view engine', 'html');
nunjucks.configure('views', { express: app, watch: true });

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  const token = req.cookies.user;
  if (token !== undefined) {
    const user = decodePayload(token);
    res.render('index.html', { user });
  } else {
    res.render('index.html');
  }
});

app.get('/login', (req, res) => {
  res.render('login.html');
});

app.post('/login', async (req, res) => {
  const { id, pw } = req.body;
  const conn = await pool.getConnection(async (conn) => conn);
  try {
    const sql = 'SELECT * FROM user WHERE userid=? AND userpw=?';
    const [[result]] = await conn.query(sql, [id, pw]);

    if (result === undefined) throw new Error('wrong account');
    const payload = {
      _id: result._id,
      userid: result.userid,
      alias: result.alias,
    };
    const token = makeToken(payload);
    res.cookie('user', token).redirect('/');
  } catch (err) {
    console.log(err);
    res.send(alertmove('/login', '존재하지 않는 계정입니다.'));
  }
});

app.get('/check', Auth, (req, res) => {
  res.send('^^로그인 돼있네요 ^^');
});

app.listen(3000);
