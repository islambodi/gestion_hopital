const service = require('../services/dossierMedicalService');

exports.creerDossier = async (req, res) => {
  try {
    const dossier = await service.creerDossier(req.body);
    res.status(201).json(dossier);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};