const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Medecin = sequelize.define('Medecin', {
  nom: { type: DataTypes.STRING, allowNull: false },
  specialite: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  adresse:{type: DataTypes.STRING,allowNull: false }
}, {
  tableName: 'medecins'
});

module.exports = Medecin;