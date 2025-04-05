const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Paiement = sequelize.define('Paiement', {
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
  },
  moyenPaiment: {
    type : DataTypes.STRING,
  }

});

module.exports = Paiement;
