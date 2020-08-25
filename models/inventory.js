module.exports = (sequelize, Datatypes) => {
  const Inventory = sequelize.define('Inventory', {
    itemName: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    description: {
      type: Datatypes.TEXT,
      allowNull: false,
    },
    price: {
      type: Datatypes.DECIMAL(13, 2),
      allowNull: false,
    },
    active: {
      type: Datatypes.BOOLEAN,
      allowNull: false,
    },
    category: {
      type: Datatypes.INTEGER,
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

  return Inventory;
};
