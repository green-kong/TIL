const express = require('express');
const nunjucks = require('nunjucks');
const cookieParser = require('cookie-parser');

const router = require('./routes/index.js');

const app = express();

app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

app.use(cookieParser());
app.use(express.static('public'));

app.use(router);

app.listen(3001);
