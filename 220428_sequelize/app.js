const models = require('./models/index.js');

models.sequelize
  .sync()
  .then(() => {
    console.log('연결성공');
  })
  .catch((err) => {
    console.log('연결실패');
    console.log(err);
  });
