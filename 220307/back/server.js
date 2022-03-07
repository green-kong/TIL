const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

const corsConfig = {
  origin: 'http://localhost:4001',
  credentials: true,
};

app.use(cors(corsConfig));

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('hello');
});

app.listen(3001);
