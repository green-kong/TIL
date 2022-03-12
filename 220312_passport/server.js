const express = require('express');
const nunjucks = require('nunjucks');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();

app.set('view engine', 'html');
nunjucks.configure('views', { express: app, watch: true });

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: 'kong',
    resave: 'false',
    saveUninitialized: 'true',
  })
);
app.use(flash());

const passport = require('./util/passport.js')(app);

app.get('/', (req, res) => {
  const { user } = req;
  if (user) {
    res.render('login.html', { user });
  } else {
    const { error } = req.flash();
    if (error === undefined) {
      res.render('login.html');
    } else {
      res.render('login.html', { error: error[0] });
    }
  }
});

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true,
  })
);

app.listen(3000);
