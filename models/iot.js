module.exports = (sequelize, DataTypes) => {
  const IoT = sequelize.define('IoT', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    device_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fcm_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'iot',
    timestamps: false,
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
  })
  IoT.associate = function (models) {
    // associations can be defined here
  }
  return IoT
}
