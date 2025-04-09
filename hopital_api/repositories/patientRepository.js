const Patient = require('../models/Patient');

const repository = {
  create: async (data) => await Patient.create(data),
  findAll: async () => await Patient.findAll()
};

module.exports = repository;