const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const DossierMedical = sequelize.define('DossierMedical', {
  antecedents: {
    type: DataTypes.STRING,
    allowNull: false
  },
  traitement: {
    type: DataTypes.STRING,
    
  },
  prescription: {
    type : DataTypes.STRING,
    
  },
  rapportExamens: {
    type : DataTypes.STRING,  
  }


});

module.exports = DossierMedical;
