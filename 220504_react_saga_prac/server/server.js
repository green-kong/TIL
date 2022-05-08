const express = require('express');
const cors = require('cors');

const { connectDB } = require('./db/index.js');
const router = require('./router/index.js');

connectDB();
const app = express();

const corsOpt = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOpt));
app.use(express.json());

app.use('/api', router);

app.listen(4000);
