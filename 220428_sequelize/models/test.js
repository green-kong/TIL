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
