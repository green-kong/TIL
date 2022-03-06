const express = require('express');
const nunjucks = require('nunjucks');

const userList = require('./models/user.js');

const app = express();

app.set('engine view', 'html');
nunjucks.configure('views', { express: app, watch: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/join', (req, res) => {
  res.render('join.html');
});

app.post('/join/idCheck', (req, res) => {
  const { userid } = req.body;

  const idCheck = userList.filter((v) => v.userid === userid).length;
  if (idCheck) {
    res.send(false);
  } else {
    res.send(true);
  }
});

app.post('/join', (req, res) => {
  const { userid, userpw, username } = req.body;
  userList.push({ userid, userpw, username });
  res.redirect('/');
});

app.listen(3000);
