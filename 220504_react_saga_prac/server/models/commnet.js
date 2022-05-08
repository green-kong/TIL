const Comment = (sequelize, DataTypes) => {
  const commentColumn = {
    c_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    author: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  const commentOption = {
    freezeTableName: true,
    tableName: 'comment',
  };

  return sequelize.define('comment', commentColumn, commentOption);
};

module.exports = Comment;
