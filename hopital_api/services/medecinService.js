const repositoryMedecin = require('../repositories/medecinRepository');

exports.createMedecin = (data) => repositoryMedecin.create(data);
exports.getAll = () => repositoryMedecin.findAll();
exports.getById = (id) => repositoryMedecin.findById(id);
exports.updateMedecin = (id, data) => repositoryMedecin.update(id, data);
exports.deleteMedecin = (id) => repositoryMedecin.delete(id);