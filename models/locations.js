module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define('Locations', {
    latitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: true,
    },
    longitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: true,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Locations;
};
