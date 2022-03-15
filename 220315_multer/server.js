const express = require('express');
const nunjucks = require('nunjucks');

const { upload } = require('./util/multer.js');

const app = express();

app.set('view engine', 'html');
nunjucks.configure('views', { express: app, watch: true });

app.get('/single', (req, res) => {
  res.render('single.html');
});

app.post('/upload', upload.single('imgUpload'), (req, res) => {
  console.log(req.file);
  console.log(req.body.subject);
  res.send('upload!');
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

app.listen(3000);
