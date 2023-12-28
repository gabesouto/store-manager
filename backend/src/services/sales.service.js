const { salesModel, productsModel } = require('../models');
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

const insertSale = async (data) => {
  const producsSold = await Promise
  .all(data.map(({ productId }) => productsModel.getById(productId)));
  if (producsSold.includes(undefined)) {
    return { type: 404, message: 'Product not found' };
  }

  const insertId = await salesModel.insertSale();
  const salePromise = data.map((sale) => salesModel.insertSaleProduct(insertId, sale));

  await Promise.all(salePromise);

  const resultData = {
    id: insertId,
    itemsSold: data,
  };
  
  return { type: 201, message: resultData };
};

const deleteSale = async (id) => {
  const error = validateSaleId(id);
  if (error.type) return error;
  const result = await salesModel.deleteSale(id);
  if (result) { return null; }

  return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
};

const updateSale = async (id, quantity) => {
  const error = validateSaleId(id);
  if (error.type) return error;
  const result = await salesModel.updateSale(id, quantity);
  return result;
};

module.exports = {
  getAll,
  getById,
  insertSale,
  deleteSale,
  updateSale,
};