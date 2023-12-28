const { productsModel } = require('../models');
const { validateId } = require('./validations/validationsInput');

const getAll = async () => {
  const result = await productsModel.getAll();
  return result;
};

const getById = async (id) => {
  const error = validateId(id);

  if (error.type) return error;
  const result = await productsModel.getById(id);

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

const deleteProduct = async (id) => {
  const error = validateId(id);
  if (error.type) return error;
  const result = await productsModel.deleteProduct(id);
  if (result) { return null; }

  return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
};

const searchProduct = async (q) => {
  const result = await productsModel.searchProduct(q);
  return result;
};

module.exports = {
  getAll,
  getById,
  insertProduct,
  deleteProduct,
  updateProduct,
  searchProduct,
};