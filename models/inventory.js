module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(13, 2),
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    category: {
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
  Inventory.associate = (models) => {
    Inventory.belongsToMany(models.Orders, {
      through: 'OrderItems',
      as: 'inventory',
      foreignKey: 'inventoryId',
      otherKey: 'orderId',
    });
  };

  return Inventory;
};
