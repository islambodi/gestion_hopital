const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Patient = require('./Patient');
const Medecin = require('./Medecin');

const RendezVous = sequelize.define('RendezVous', {
  date: { type: DataTypes.DATE, allowNull: false },
  statut: { type: DataTypes.STRING, defaultValue: 'en_attente' }
}, {
  tableName: 'rendezvous'
});

Patient.hasMany(RendezVous);
RendezVous.belongsTo(Patient);

Medecin.hasMany(RendezVous);
RendezVous.belongsTo(Medecin);

module.exports = RendezVous;