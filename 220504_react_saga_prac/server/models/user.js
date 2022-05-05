const User = (sequelize, DataTypes) => {
  const userColumn = {
    u_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userPw: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userAlias: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  const userOption = {
    freezeTableName: true,
    tableName: 'user',
    timestamps: false,
  };

  return sequelize.define('user', userColumn, userOption);
};

module.exports = User;
