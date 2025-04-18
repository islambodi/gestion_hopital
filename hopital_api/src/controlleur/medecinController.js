const medecinService = require('../services/medecinService');

exports.createMedecin = async (req, res) => {
  try {
    const medecin = await medecinService.createMedecin(req.body);
    res.status(201).json(medecin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllMedecins = async (req, res) => {
  const medecins = await medecinService.getAllMedecins();
  res.json(medecins);
};

exports.getMedecinById = async (req, res) => {
  const medecin = await medecinService.getMedecinById(req.params.id);
  if (!medecin) return res.status(404).json({ message: "Medecin not found" });
  res.json(medecin);
};

exports.updateMedecin = async (req, res) => {
  const medecin = await medecinService.updateMedecin(req.params.id, req.body);
  if (!medecin) return res.status(404).json({ message: "Medecin not found" });
  res.json(medecin);
};

exports.deleteMedecin = async (req, res) => {
  const success = await medecinService.deleteMedecin(req.params.id);
  if (!success) return res.status(404).json({ message: "Medecin not found" });
  res.json({ message: "Medecin deleted successfully" });
};




/**
 * partie de code pour la gestion du service de medecin
 */



// Méthode 1 : Consulter le dossier médical d'un patient
exports.consultPatientDossier = async (req, res) => {
  try {
    const dossier = await medecinService.getPatientDossier(req.params.patientId);
    if (!dossier) return res.status(404).json({ message: 'Patient dossier not found' });
    res.json(dossier);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Méthode 2 : Effectuer une consultation
exports.performConsultation = async (req, res) => {
  try {
    const consultation = await medecinService.markConsultationDone(req.params.patientId);
    res.json({ message: 'Consultation accordée', consultation });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Méthode 3 : Prescrire un médicament
exports.prescribeMedicament = async (req, res) => {
  try {
    const prescription = await medecinService.addPrescription(req.params.patientId, req.body.medicament);
    res.json({ message: 'Prescription added', prescription });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Méthode 4 : Gérer les rendez-vous
exports.getAllRendezVous = async (req, res) => {
  try {
    const rendezvous = await medecinService.getAllAppointments();
    res.json(rendezvous);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

