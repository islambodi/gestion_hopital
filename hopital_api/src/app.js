const express = require('express');
const sequelize = require('./../config/db');

// Charger tous les modèles pour la synchronisation
require('./models/Patient');
require('./models/Medecin');
require('./models/BonConsultation');
require('./models/Administrateur');
require('./models/Paiement');
require('./models/Rendez_vous');
require('./models/DossierMedical');

// Importer les routes
const medecinRoutes = require('./routes/api');
// tu peux ajouter ici aussi patientRoutes, adminRoutes, etc...

const app = express();
app.use(express.json());

// Brancher les routes
app.use('/api/', medecinRoutes);
// app.use('/api/patients', patientRoutes);

sequelize.sync({ alter: true })
  .then(() => console.log('Base synchronisée avec PostgreSQL.'))
  .catch(err => console.error('Erreur de synchronisation', err));

const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`));
