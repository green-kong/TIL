const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const { upload } = require('./util/multer.js');
const board = require('./model/board.js');

const app = express();

app.set('view engine', 'html');
nunjucks.configure('views', { express: app, watch: true });

app.use(express.static('uploads'));

app.get('/single', (req, res) => {
  res.render('single.html');
});

app.post('/upload', upload.single('imgUpload'), (req, res) => {
  const { filename, destination } = req.file;
  const { subject } = req.body;
  const filePath = `/${filename}`;
  const data = { subject, filePath };
  board.push(data);
  console.log(board);
  res.redirect('/board');
});

app.get('/multi', (req, res) => {
  res.render('multi.html');
});

app.post('/multipleUpload', upload.array('imgUpload'), (req, res) => {
  console.log(req.files);
  console.log(req.body.subject);
  res.send('upload!');
});

app.get('/filedsUpload', (req, res) => {
  res.render('fields.html');
});

app.post(
  '/filedsUpload',
  upload.fields([
    { name: 'upload1' },
    { name: 'upload2' },
    { name: 'upload3' },
    { name: 'upload4' },
  ]),
  (req, res) => {
    console.log(req.files.upload1);
    console.log(req.body.subject);
    res.send('upload!');
  }
);

app.get('/axios', (req, res) => {
  res.render('axios.html');
});

app.get('/board', (req, res) => {
  const result = board[0];
  res.render('list.html', { result });
});

app.get('/board/view', (req, res) => {
  const result = board[0];
  res.render('view.html', { result });
});

app.listen(3000);
