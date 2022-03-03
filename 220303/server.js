require('dotenv').config();

const express = require('express');
const nunjucks = require('nunjucks');
const cookieParser = require('cookie-parser');
const router = require('./routes/index.js');

const app = express();
app.set('view engine', 'html');
nunjucks.configure('views', { express: app, watch: true });

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);

app.listen(process.env.HOST);
