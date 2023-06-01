const { productsModel } = require('../models');
const { validateId } = require('./validations/validationsInput');

const getAll = async () => {
  const result = await productsModel.getAll();
  return result;
};

const getById = async (id) => {
  const error = validateId(id);
  console.log(error);
  if (error.type) return error;
  const result = await productsModel.getById(id);
  console.log('SERVICE', result);
  if (result) return result;
  
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};
const insertProduct = async (data) => {
  const result = await productsModel.insertProduct(data);
  console.log('productService', result);
  return result;
};
const updateProduct = async (id, name) => {
  const result = await productsModel.updateProduct(id, name);
  console.log('productService', result);
  return result;
};
module.exports = {
  getAll,
  getById,
  insertProduct,
  updateProduct,
};