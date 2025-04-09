const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/medecinController');

router.post('/', ctrl.ajouterMedecin);
router.get('/', ctrl.getAllMedecins);
router.get('/:id', ctrl.getMedecinById);
router.put('/:id', ctrl.updateMedecin);
router.delete('/:id', ctrl.deleteMedecin);

module.exports = router;