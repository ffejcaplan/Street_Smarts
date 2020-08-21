module.exports = (sequelize, Datatypes) => {
  const Inventory = sequelize.define('Inventory', {
    name: {
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
      type: Datatypes.BOOLEAN,
      allowNull: false,
    },
  });

  // menuItem.associate = (modles) => {
  //     menuItem.
  // }

  return Inventory;
};
