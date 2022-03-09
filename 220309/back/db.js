require('dotenv').config();

const mysql = require('mysql2');

const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'dev_kong';
const password = process.env.DB_PW || 'qwer1234';
const database = process.env.DB_DATABASE || 'home';

const config = { host, user, password, database };
const pool = mysql.createPool(config);
const promisePool = pool.promise();

module.exports = promisePool;
