const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const pool = require('./db.js');

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
//   res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS, DELETE');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-type');

app.get('/', (req, res) => {
  res.send('hello');
});

app.post('/', (req, res) => {
  res.setHeader('Set-Cookie', 'ingoo=name', 'Domain=localhost;');
  res.send('123');
});

app.post('/api/user/join', async (req, res) => {
  const { userid, userpw, name, nickname, birth, phone, mobile, gender } =
    req.body;
  const conn = await pool.getConnection();
  const sql = `INSERT INTO user 
              (userid, userpw, name, nickname, birth, phone, mobile, gender,userlevel)
              VALUES
              (?,?,?,?,?,?,?,?,'3')`;
  const prepare = [
    userid,
    userpw,
    name,
    nickname,
    birth,
    phone,
    mobile,
    gender,
  ];
  let data = {
    result: 'fail',
    err: 'fail',
  };
  try {
    const [result] = await conn.query(sql, prepare);
    data = {
      ...data,
      result,
    };
    const cookieOpt = {
      path: '/',
      httpOnly: true,
      secure: true,
      domain: 'localhost',
    };
    res.cookie('name', 'kong', cookieOpt);
  } catch (err) {
    data = {
      ...data,
      err,
    };
    console.log(err);
  } finally {
    res.send(data);
    conn.release();
  }
});

app.post('/api/user/idchk', async (req, res) => {
  const { userid } = req.body;
  console.log(userid);
  const conn = await pool.getConnection();
  const sql = `SELECT * FROM user WHERE userid='${userid}'`;
  try {
    const [[result]] = await conn.query(sql);
    console.log(result);
    if (result !== undefined) throw new Error('중복된 아이디');

    res.send({ result: 'pass' });
  } catch (err) {
    console.log(err);
    res.send({ result: 'fail' });
  } finally {
    conn.release();
  }
});

app.listen(4001);
