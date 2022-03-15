const express = require('express');
const axios = require('axios');

const { Auth } = require('../../middlewares/auth.js');

const router = express.Router();

router.get('/list', Auth, async (req, res) => {
  res.render('board/list.html');
});

router.get('/view', Auth, async (req, res) => {
  const { idx } = req.query;

  const url = 'http://localhost:4001/api/board/view';
  const body = { idx };

  try {
    const response = await axios.post(url, body);
    const result = response.data;
    res.render('board/view.html', { result });
  } catch (err) {
    console.log(err);
  }
});

router.get('/write', Auth, (req, res) => {
  const { userid } = req.user;
  res.render('board/write.html', { userid });
});

router.get('/edit', Auth, (req, res) => {
  res.render('board/edit.html');
});

module.exports = router;
