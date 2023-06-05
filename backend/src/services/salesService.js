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
  console.log(salePromise);
  const result = await Promise.all(salePromise);

  console.log('AQQQ', result);
  const resultData = {
    id: insertId,
    itemsSold: data,
  };
  console.log(resultData);
  return { type: 201, message: resultData };
};

module.exports = {
  getAll,
  getById,
  insertSale,
};