module.exports = (sequelize, Datatypes) => {
  const Categories = sequelize.define('Categories', {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  });

  return Categories;
};
