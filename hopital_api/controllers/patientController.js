const patientService = require('../services/patientService');

exports.ajouterPatient = async (req, res) => {
  try {
    const patient = await patientService.createPatient(req.body);
    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllPatients = async (req, res) => {
  const patients = await patientService.getAll();
  res.json(patients);
};