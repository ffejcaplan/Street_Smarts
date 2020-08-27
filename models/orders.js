module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
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
    Orders.belongsToMany(models.Orders, {
      through: 'OrderLocations',
      as: 'orders',
      foreignKey: 'orderId',
      otherKey: 'Location',
    });
  };

  Orders.associate = (models) => {
    Orders.belongsToMany(models.Orders, {
      through: 'OrderItems',
      as: 'orders',
      foreignKey: 'orderId',
      otherKey: 'Inventory',
    });
  };
  return Orders;
};
