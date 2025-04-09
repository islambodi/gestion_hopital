const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/rendezVousController');

router.post('/', ctrl.ajouterRendezVous);
router.get('/', ctrl.getAll);

module.exports = router;