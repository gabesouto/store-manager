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

// const validateNewProduct = ()

module.exports = {
  validateId,
};