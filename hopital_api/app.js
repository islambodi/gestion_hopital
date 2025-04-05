const express = require('express');
const sequelize = require('./config/db');

const Patient = require('./src/models/Patient');
const Medecin = require('./src/models/Medecin');
const BonConsultation = require('./src/models/BonConsultation');
const Admin = require('./src/models/Administrateur');
const Paiement = require('./src/models/Paiement');
const Rendez_vous = require('./src/models/Rendez_vous');
const DossierMedical = require('./src/models/DossierMedical');
// Tu peux en ajouter autant que tu veux

const app = express();
app.use(express.json());

sequelize.sync({ alter: true })
  .then(() => console.log('Base synchronisée avec toutes les tables'))
  .catch(err => console.error('Erreur de synchronisation', err));

  const PORT = 3000;
  app.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`));