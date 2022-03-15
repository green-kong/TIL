const express = require('express');

const router = express.Router();

router.get('/join', (req, res) => {
  res.render('join');
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
