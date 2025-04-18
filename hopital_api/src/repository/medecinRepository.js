const Medecin = require('../models/Medecin');

const medecinRepository = {
  create: async (data) => await Medecin.create(data),
  findAll: async () => await Medecin.findAll(),
  findById: async (id) => await Medecin.findByPk(id),
  update: async (id, data) => {
    const medecin = await Medecin.findByPk(id);
    if (!medecin) return null;
    return await medecin.update(data);
  },
  delete: async (id) => {
    const medecin = await Medecin.findByPk(id);
    if (!medecin) return null;
    await medecin.destroy();
    return true;
  }
};

module.exports = medecinRepository;
