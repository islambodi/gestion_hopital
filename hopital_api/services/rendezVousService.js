const repository = require('../repositories/rendezVousRepository');

exports.creerRendezVous = (data) => repository.create(data);
exports.getAll = () => repository.findAll();