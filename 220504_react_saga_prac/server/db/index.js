require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const user = require('../models/user.js');

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PW = process.env.DB_PW;
const DB_DATABASE = process.env.DB_DATABASE;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PW, {
  host: DB_HOST,
  dialect: 'mysql',
});

exports.connectDB = async () => {
  try {
    user(sequelize, DataTypes);
    await sequelize.sync();
    console.log('DATABASE CONNECTED');
  } catch (e) {
    console.log('FAIL TO CONNECT DATABASE');
    console.log('REASEON IS : ', e);
  }
};

exports.user = user(sequelize, DataTypes);
