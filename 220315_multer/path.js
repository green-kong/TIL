const path = require('path');

console.log(__dirname);

const dir = path.join(__dirname, '/ingoo.js'); // 절대경로 무시
const resolveDir = path.resolve(__dirname, '/ingoo.js'); // 절대경로 존중
console.log(dir); // /Users/donghunlee/Documents/dev/kyungil/220315_multer/ingoo.js
console.log(resolveDir); // /ingoo.js

let str = 'server.js';

console.log(str.split('.')[1]); //js
console.log(path.extname('server.js')); //.js
