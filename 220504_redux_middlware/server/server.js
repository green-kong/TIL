const { Sequelize, DataTypes } = require('sequelize');

// 인자값 4개 받음
// 1. 데이터베이스 이름
// 2. user
// 3. db pw
// 4. Object 옵션 설정
//  4.1 host:localhost
//  4.2 dialect: 'mysql'
//  4.3 pool option(생략가능)
const sequelize = new Sequelize('example', 'dev_kong', 'qwer1234', {
  host: 'localhost',
  dialect: 'mysql',
});

// sequelize
//   .sync()
//   .then((data) => {
//     console.log('접속됨');
//   })
//   .catch((e) => {
//     console.log('접속실패함');
//   });

async function init() {
  try {
    // 서순 중요
    comment();
    await sequelize.sync();
    insert();
    console.log('접속');
  } catch (e) {
    console.log('접속안됨');
  }
}

init();

function comment() {
  // model
  // 인자값 두개
  // 1. 테이블명
  // 2. 필드내용
  // 3. 옵션
  const USER = sequelize.define(
    'comment',
    {
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { tableName: 'board', timestamps: false }
  );
  return USER;
}

async function insert() {
  const USER = comment();

  await USER.create({ subject: 'adfads', content: '213897123984' });
}
