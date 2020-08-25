module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(13, 2),
      allowNull: false,
    },
    customer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payment_method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // id of location from location
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    updatedAt: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  });

  Orders.associate = (models) => {
    Orders.belongsToMany(models.Locations, {
      through: 'OrderLocations',
      as: 'orders',
      foreignKey: 'locationId',
      otherKey: 'orderId',
    });
  };
  return Orders;
};
