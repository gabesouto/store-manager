const { productsService } = require('../services');

const getAll = async (req, res) => {
  const result = await productsService.getAll();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.getById(id);
  if (result.type) {
    return res.status(404).json({ message: result.message }); // Add return statement here
  }
  res.status(200).json(result);
};

module.exports = {
  getAll,
  getById,
};
