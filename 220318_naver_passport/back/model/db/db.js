require('dotenv').config();
const mysql = require('mysql2/promise');

const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'dev_kong';
const password = process.env.DB_PASSWORD || 'qwer1234';
const database = process.env.DB_DATABASE || 'home';

const config = { host, user, password, database };
exports.pool = mysql.createPool(config);
