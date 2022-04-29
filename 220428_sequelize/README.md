# Sequelize(feat. mysql2)

1. sequelize & db 설치

```zsh
$ npm i sequelize mysql2
$ npm i sequelize-cli
```

2. sequelize 세팅

```zsh
$ sequelize init
```

터미널에 입력하면, 프로젝트 디렉토리에 이것저것 다른 디렉토리가 생성된다.

```json
// config/config.json
  "development": {
    "username": db_username,
    "password": db_userpw,
    "database": db_databasename,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```

3. table 생성

- js파일을 통해서 생성

```javascript
// models 디렉토리에 test.js 생성 후 코드작성
// node app.js 실행하면 db에 테이블 생성됨
// models/test.js

module.exports = function (sequelize, DataTypes) {
  let test = sequelize.define(
    'test',
    {
      userId: {
        filed: 'user_id',
        type: DataTypes.STRING(50),
      },
      userPw: {
        filed: 'user_pw',
        type: DataTypes.STRING(50),
      },
    },
    {
      underscored: true,
      tableName: 'test',
    }
  );
  return test;
};
```

- cli 를 통해 생성

```zsh
$ sequelize model:create --name user2 --attributes "user_id:string, password:string"
```

명령어 입력하면 models와 migrations 에 파일이 생성된다.
마찬가지로 node app.js 실행하면 db에 테이블이 생성된다.

4. CRUD

```javascript
// create

router.post('', (req, res) => {
  const { title, writer } = req.body;

  models.users.create({
    title,
    writer,
  });
});

// Read

router.get('', (req, res) => {
  models.users
    .findAll()
    .then(() => {})
    .catch(() => {});

  models.users
    .findOne({ where: { id: 'idx' } })
    .then(() => {})
    .catch(() => {});
});

// Update

router.post('', (req, res) => {
  const { title, writer } = req.body;
  models.users.update(
    {
      title,
      writer,
    },
    { where: { id: 'idx' } }
  );
});

// Delete

router.destroy('', (req, res) => {
  models.users.detroy({ where: { id: 'idx' } });
});
```
