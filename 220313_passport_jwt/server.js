require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const pool = require('./db.js');

const app = express();

app.set('view engine', 'html');
nunjucks.configure('views', { express: app, watch: true });

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { ExtractJwt } = require('passport-jwt');
const JSWTStrategy = require('passport-jwt').Strategy;

const passportConfig = {
  usernameField: 'userid',
  passwordField: 'userpw',
};

const passportVerify = async (userid, password, done) => {
  const conn = await pool.getConnection();
  const sql = 'SELECT * FROM user WHERE userid = ? AND userpw = ?';
  const prepare = [userid, password];
  try {
    const [[user]] = await conn.query(sql, prepare);
    if (user === undefined) throw new Error('존재하지 않는 계정입니다.');
    done(null, user);
  } catch (err) {
    done(null, false, { message: err.message });
  } finally {
    conn.release();
  }
};

const JWTConfig = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SALT,
};

const JWTVerify = async (jwtPayload, done) => {
  console.log(jwtPayload);
  const conn = await pool.getConnection();
  const sql = 'SELECT * FROM user WHERE _id=?';
  const prepare = [jwtPayload._id];
  try {
    const [[user]] = await conn.query(sql, prepare);
    if (user === undefined) throw new Error('로그인 후 이용가능 합니다.');
    done(null, user);
  } catch (err) {
    console.log(err.message);
  }
};

app.use(passport.initialize());
passport.use('local', new LocalStrategy(passportConfig, passportVerify));
passport.use('jwt', new JSWTStrategy(JWTConfig, JWTVerify));

app.get('/', (req, res) => {
  console.log(req.headers);
  res.render('index.html');
});

app.get('/login', (req, res) => {
  res.render('login.html');
});

app.get(
  '/auth',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log(req.user, 'req.user 에 있는 정보');
    res.render('auth.html');
  }
);

app.post('/login', async (req, res) => {
  try {
    passport.authenticate('local', (passportError, user, info) => {
      if (passportError || !user) {
        res.status(400).redirect('/');
        return;
      }

      req.login(user, { session: false }, (loginError) => {
        if (loginError) {
          res.send(loginError);
          return;
        }
        const { _id, userid, alias } = user;
        const payload = { _id, userid, alias };
        let token = jwt.sign(payload, process.env.JWT_SALT);
        token = `Bearer ${token}`;
        res.redirect('/');
      });
    })(req, res);
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000);
