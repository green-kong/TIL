const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const pool = require('./db').pool;
const { createToken, checkToken, decodePayload } = require('./utils/jwt.js');
const uploadRouter = require('./routes/uploadRouter.js');

const app = express();

app.use(express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use('/upload', uploadRouter);

app.post('/', (req, res) => {
  console.log(req.body);
  res.setHeader('Set-cookie', 'name=ingoo; Domain=localhost;');
  res.send('123123');
});
// POST http://localhost:4001/api/user/join
app.post('/api/user/join', async (req, res) => {
  const { userid, userpw, name, nickname, birth, gender, phone, mobile } =
    req.body;
  const sql = `INSERT INTO user(
                    userlevel,
                    userid,
                    userpw,
                    name,
                    nickname,
                    birth,
                    gender,
                    phone,
                    mobile
                ) values(
                    ?,?,?,?,?,now(),'1',?,?
                )`;
  const prepare = [1, userid, userpw, name, nickname, phone, mobile];
  try {
    const [result] = await pool.execute(sql, prepare);

    const response = {
      result: {
        row: result.affectedRows,
        id: result.insertId,
      },
      errno: 0,
    };

    res.setHeader('Set-cookie', 'name=ingoo; path=/; Domain=localhost;');
    res.cookie('name2', 'ingoo2', {
      path: '/',
      httpOnly: true,
      secure: true,
      domain: 'localhost',
    });
    res.json(response);
  } catch (err) {
    console.log(err.message);
    const response = {
      result: {
        row: 0,
        id: 0,
      },
      errno: 1,
    };
    res.json(response);
  }
});

app.post('/api/user/login', async (req, res) => {
  const { userid, userpw } = req.body;
  const conn = await pool.getConnection();
  const sql =
    'SELECT userid, userlevel, nickname FROM user WHERE userid= ? AND userpw= ?';
  const prepare = [userid, userpw];
  const response = {
    result: '',
  };
  try {
    const [[result]] = await conn.query(sql, prepare);
    if (result === undefined) throw new Error('존재하지 않는 계정');
    response.result = result;
    const payload = {
      ...result,
    };
    const token = createToken(payload);
    const cookieOpt = {
      httpOnly: true,
      domain: 'localhost',
    };
    res.cookie('token', token, cookieOpt);
  } catch (err) {
    response.result = 'fail';
    console.log(err.message);
  } finally {
    res.json(response);
  }
});

app.post('/api/board/list', async (req, res) => {
  const conn = await pool.getConnection();
  const sql = `SELECT 
              idx,
              subject,
              nickname,
              date_format(date, '%Y-%m-%d') AS date,
              content,
              hit
              FROM board
              ORDER BY idx desc
              `;
  try {
    const [result] = await conn.query(sql);
    if (result.length === 0) {
      throw new Error('err01: 게시글이 없습니다.');
    }
    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
    const [errNo, errMsg] = err.message.split(':');
    if (errNo === 'err01') {
      res.status(204).send(errMsg);
    } else {
      res.status(400).send(err.message);
    }
  } finally {
    conn.release();
  }
});

app.post('/api/board/write', async (req, res) => {
  const { subject, author, content } = req.body;

  const conn = await pool.getConnection();
  const sql = `INSERT INTO board (subject, nickname, date, content, hit)
                VALUES (?,?,now(),?,0)`;
  const prepare = [subject, author, content];
  let response = {
    errno: 0,
  };
  try {
    const [result] = await conn.query(sql, prepare);
    response = {
      ...response,
      result: {
        affectedRows: result.affectedRows,
        insertId: result.insertId,
      },
    };
    // const sql2 = `SELECT * FROM board WHERE idx=${result.insertId}`;
    // const [[result2]] = await conn.query(sql2);
  } catch (err) {
    console.log(err);
    response = {
      ...response,
      errno: 1,
    };
  } finally {
    res.json(response);
    conn.release();
  }
});

// idx INT NOT NULL AUTO_INCREMENT,
//     subject VARCHAR(40) NOT NULL,
//     nickname VARCHAR(10) NOT NULL,
//     date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
//     content TEXT,
//     hit INT DEFAULT 0 NOT NULL,
//     PRIMARY KEY(idx)

app.post('/api/auth', (req, res) => {
  const { token } = req.body;
  try {
    if (token === undefined) {
      throw new Error('토큰 없음');
    }

    if (!checkToken(token)) {
      throw new Error('토큰 조작');
    }

    res.send(decodePayload(token));
  } catch (err) {
    res.send(false);
  }
});

app.post('/api/board/view', async (req, res) => {
  const { idx } = req.body;
  const conn = await pool.getConnection();
  const sql = `SELECT 
              subject,
              nickname,
              date_format(date, '%Y-%m-%d') AS date,
              content,
              hit
              FROM board WHERE idx=${idx}`;
  try {
    const [[result]] = await conn.query(sql);
    if (result === undefined) {
      throw new Error('err01: 존재하지 않는 게시물입니다');
    }
    res.status(200).json(result);
  } catch (err) {
    const [errNo, errMsg] = err.message.split(':');
    if (errNo === 'err01') {
      res.status(204).send(errMsg);
    } else {
      res.status(400).send(err.message);
    }
  } finally {
    conn.release();
  }
});

app.listen(4001, () => {
  console.log(`server 시작`);
});
//
// /home/ingoo/workspace/220307/cors/back/SQL/table.sql
