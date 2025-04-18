const DossierMedical = require('../models/DossierMedical');

exports.findByPatientId = async (patientId) => {
    return await DossierMedical.findOne({ where: { PatientId: patientId } });
  };
  
  exports.addMedicamentToDossier = async (patientId, medicament) => {
    const dossier = await DossierMedical.findOne({ where: { PatientId: patientId } });
    if (!dossier) return null;
    
    dossier.prescriptions.push(medicament);
    await dossier.save();
    return dossier;
  };