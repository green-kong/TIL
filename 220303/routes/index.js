const express = require('express');

const userRouter = require('./user/userRouter.js');
const { Auth } = require('../auth.js');

const router = express.Router();

router.get('/', Auth, (req, res) => {
  if (req.user === undefined) {
    res.render('index.html');
  } else {
    const { user } = req;
    res.render('index.html', { user });
  }
});

router.use('/user', userRouter);

module.exports = router;
