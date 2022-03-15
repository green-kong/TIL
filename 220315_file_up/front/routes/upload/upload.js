const axios = require('axios');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('upload.html');
});

router.get('/view', async (req, res) => {
  const url = 'http://localhost:4001/upload/view';
  const response = await axios.post(url);

  const { result } = response.data;

  res.render('upview.html', { result });
});

module.exports = router;
