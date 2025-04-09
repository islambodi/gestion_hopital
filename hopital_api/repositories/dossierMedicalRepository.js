const DossierMedical = require('../models/DossierMedical');

const repository = {
  create: async (data) => await DossierMedical.create(data)
};

module.exports = repository;