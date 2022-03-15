const express = require('express');

const boardRouter = require('./board/boardRoutes.js');
const userRouter = require('./user/userRoutes.js');
const uploadRouter = require('./upload/upload.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.use('/board', boardRouter);
router.use('/user', userRouter);
router.use('/upload', uploadRouter);

module.exports = router;
