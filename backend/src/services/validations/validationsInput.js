const { idSchema } = require('./schema');
// const { productsModel } = require('../../models');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) {
 return {
    type: 'PRODUCT_NOT_FOUND',
    message: 'Product not found', 
  };
} return { type: null, message: '' };
};
const validateSaleId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) {
 return {
    type: 'SALE_NOT_FOUND',
    message: 'Sale not found', 
  };
} return { type: null, message: '' };
};
// const validateNewProduct = ()

module.exports = {
  validateId,
  validateSaleId,
};