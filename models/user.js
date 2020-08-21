/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */
const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    // The email cannot be null, and must be a proper email before creation
    // The password cannot be null
    pin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { len: [4] },
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
  // Creating a custom method for our User model. This will check if an unhashed
  // password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (pin) {
    return bcrypt.compareSync(pin, this.pin);
  };

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook('beforeCreate', (user) => {
    user.pin = bcrypt.hashSync(user.pin, bcrypt.genSaltSync(10), null);
  });
  return User;
};
