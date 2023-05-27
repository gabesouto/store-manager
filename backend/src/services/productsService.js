const { productsModel } = require('../models');

const getAll = async () => {
  const result = await productsModel.getAll();
  return result;
};

// const getById = async () => {
//   const result 
// }

module.exports = {
  getAll,
};