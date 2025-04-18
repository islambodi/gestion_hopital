const RendezVous = require('../models/RendezVous');

exports.findAll = async () => {
  return await RendezVous.findAll();
};

exports.markConsultationDone = async (patientId) => {
  const rendezvous = await RendezVous.findOne({ where: { PatientId: patientId, statut: 'en_attente' } });
  if (!rendezvous) return null;
  
  rendezvous.statut = 'consulté';
  await rendezvous.save();
  return rendezvous;
};
