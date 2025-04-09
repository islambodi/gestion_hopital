const express = require('express');
const sequelize = require('./config/db');

const medecinRoutes = require('./routes/medecinRoutes');
const patientRoutes = require('./routes/patientRoutes');
const rendezVousRoutes = require('./routes/rendezVousRoutes');
const dossierMedicalRoutes = require('./routes/dossierMedicalRoutes');

const app = express();
app.use(express.json());

app.use('/api/medecins', medecinRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/rendezvous', rendezVousRoutes);
app.use('/api/dossiers', dossierMedicalRoutes);

sequelize.sync()
  .then(() => console.log("Base de données synchronisée avec PostgreSQL."))
  .catch(err => console.error("Erreur de connexion :", err));

app.listen(3000, () => console.log("Serveur démarré sur http://localhost:3000"));