const express = require('express');
const cors = require('cors');

const { connectDB, user } = require('./db/index.js');

connectDB();
const app = express();

const corsOpt = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOpt));
app.use(express.json());

app.post('/api/login', async (req, res) => {
  const result = await user.findOne({ where: req.body });
  if (result !== null) {
    console.log(result.dataValues);
    res.send(true);
  } else {
    res.send(false);
  }
});

app.listen(4000);
