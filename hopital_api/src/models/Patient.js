const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Patient = sequelize.define('Patient', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type : DataTypes.STRING,
    unique : true
  }

});

module.exports = Patient;
