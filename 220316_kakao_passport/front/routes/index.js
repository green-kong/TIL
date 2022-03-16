const express = require('express');

const userRouter = require('./user/userRouter');

const router = express.Router();

router.use('/user', userRouter);

router.get('/', (req, res) => {
  res.render('index.html');
});

module.exports = router;
