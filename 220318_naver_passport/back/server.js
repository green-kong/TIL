const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const router = require('./routes/index.js');
const passportConfig = require('./utils/passport/index.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

passportConfig();

app.use(router);

app.listen(3000);
