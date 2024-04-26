module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      allowNull: false
    },
  }, {
    // Other model options go here
    tableName: 'Users',
    timestamps: true,
    freezeTableName: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
}
