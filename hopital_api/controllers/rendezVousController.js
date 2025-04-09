const service = require('../services/rendezVousService');

exports.ajouterRendezVous = async (req, res) => {
  try {
    const rdv = await service.creerRendezVous(req.body);
    res.status(201).json(rdv);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  const rdvs = await service.getAll();
  res.json(rdvs);
};