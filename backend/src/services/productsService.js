const { productsModel } = require('../models');

const getAll = async () => {
  const result = await productsModel.getAll();
  return result;
};

const getById = async (id) => {
  const result = await productsModel.getById(id);
  return result;
};

module.exports = {
  getAll,
  getById,
};