const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const BonConsultation = sequelize.define('BonConsultation', {
  dateEmission: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,

  }
});

module.exports = BonConsultation;
