const medecinService = require('../services/medecinService');

exports.ajouterMedecin = async (req, res) => {
  try {
    const medecin = await medecinService.createMedecin(req.body);
    res.status(201).json(medecin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllMedecins = async (req, res) => {
  const medecins = await medecinService.getAll();
  res.json(medecins);
};

exports.getMedecinById = async (req, res) => {
  const medecin = await medecinService.getById(req.params.id);
  if (!medecin) return res.status(404).json({ message: "Médecin non trouvé" });
  res.json(medecin);
};

exports.updateMedecin = async (req, res) => {
  const medecin = await medecinService.updateMedecin(req.params.id, req.body);
  if (!medecin) return res.status(404).json({ message: "Médecin non trouvé" });
  res.json(medecin);
};

exports.deleteMedecin = async (req, res) => {
  const success = await medecinService.deleteMedecin(req.params.id);
  if (!success) return res.status(404).json({ message: "Médecin non trouvé" });
  res.json({ message: "Médecin supprimé" });
};