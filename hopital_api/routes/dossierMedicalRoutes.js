const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/dossierMedicalController');

router.post('/', ctrl.creerDossier);

module.exports = router;