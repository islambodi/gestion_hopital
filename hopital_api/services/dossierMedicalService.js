const repository = require('../repositories/dossierMedicalRepository');

exports.creerDossier = (data) => repository.create(data);