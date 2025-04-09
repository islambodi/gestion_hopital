const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/patientController');

router.post('/', ctrl.ajouterPatient);
router.get('/', ctrl.getAllPatients);

module.exports = router;