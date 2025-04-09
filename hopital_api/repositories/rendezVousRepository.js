const RendezVous = require('../models/RendezVous');

const repository = {
  create: async (data) => await RendezVous.create(data),
  findAll: async () => await RendezVous.findAll({ include: ['Patient', 'Medecin'] })
};

module.exports = repository;