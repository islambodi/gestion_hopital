const medecinRepository = require('../repository/medecinRepository');
const dossierRepository = require('../repositories/dossierMedicalRepository');
const rendezVousRepository = require('../repositories/rendezVousRepository');

// Consulter dossier
exports.getPatientDossier = (patientId) => dossierRepository.findByPatientId(patientId);

// Effectuer consultation
exports.markConsultationDone = (patientId) => rendezVousRepository.markConsultationDone(patientId);

// Prescrire médicament
exports.addPrescription = (patientId, medicament) => dossierRepository.addMedicamentToDossier(patientId, medicament);

// Voir tous les rendez-vous
exports.getAllAppointments = () => rendezVousRepository.findAll();
// Gérer les rendez-vous
exports.createAppointment = (data) => rendezVousRepository.create(data);
exports.updateAppointment = (id, data) => rendezVousRepository.update(id, data);
exports.deleteAppointment = (id) => rendezVousRepository.delete(id);

// Gérer les médecins

exports.createMedecin = async (data) => medecinRepository.create(data);
exports.getAllMedecins = async () => medecinRepository.findAll();
exports.getMedecinById = async (id) => medecinRepository.findById(id);
exports.updateMedecin = async (id, data) => medecinRepository.update(id, data);
exports.deleteMedecin = async (id) => medecinRepository.delete(id);
exports.getMedecinByEmail = async (email) => {
  const medecin = await medecinRepository.findByEmail(email);
  if (!medecin) throw new Error('Medecin not found');
  return medecin;
};