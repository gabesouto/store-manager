const { salesModel } = require('../models');
const { validateSaleId } = require('./validations/validationsInput');

const getAll = async () => {
  const result = await salesModel.getAll();
  return result;
};

const getById = async (id) => {
  const error = validateSaleId(id);
  if (error.type) return error;
  const result = await salesModel.getById(id);
  if (result) return result;
  return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
};

module.exports = {
  getAll,
  getById,
};