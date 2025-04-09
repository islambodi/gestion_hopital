const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Patient = require('./Patient');

const DossierMedical = sequelize.define('DossierMedical', {
  antecedents: { type: DataTypes.TEXT },
  traitements: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] },
  prescriptions: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] },
  rapportsExamens: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] }
}, {
  tableName: 'dossiers_medical'
});

Patient.hasOne(DossierMedical);
DossierMedical.belongsTo(Patient);

module.exports = DossierMedical;