const { productsService } = require('../services');

const getAll = async (req, res) => {
  const result = await productsService.getAll();
    res.status(200).json(result);
};

module.exports = {
  getAll,
};