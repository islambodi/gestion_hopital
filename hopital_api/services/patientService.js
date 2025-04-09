const patientRepository = require('../repositories/patientRepository');

exports.creerPatient = (data) => patientRepository.create(data);
exports.getAll = () => patientRepository.findAll();