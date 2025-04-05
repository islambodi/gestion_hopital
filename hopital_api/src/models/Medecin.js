const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Medecin = sequelize.define('Medecin', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  specialite: {
    type: DataTypes.STRING,
    unique: true
  }
});

module.exports = Medecin;
