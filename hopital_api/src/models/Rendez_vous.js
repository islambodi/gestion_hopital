const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Rendez_vous = sequelize.define('Rendez_vous', {
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
  }

});

module.exports = Rendez_vous;
