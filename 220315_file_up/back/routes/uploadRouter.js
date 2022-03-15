const express = require('express');

const { upload } = require('../utils/multer.js');
const board = require('../model/board.js');

const router = express.Router();

router.post('/', upload.single('imgUpload'), (req, res) => {
  const { filename } = req.file;
  const { subject } = req.body;
  const filePath = `http://localhost:4001/${filename}`;
  const data = { subject, filePath };
  board.push(data);
  console.log(board);
  res.send('OK');
});

router.post('/view', (req, res) => {
  console.log('check');
  res.json({ result: board[0] });
});

module.exports = router;
