const { salesService } = require('../services');

const getAll = async (req, res) => {
  const result = await salesService.getAll();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.getById(id);
  if (result.type) {
    return res.status(404).json({ message: result.message }); // Add return statement here
  }
  res.status(200).json(result);
};
const insertSale = async (req, res) => {
  const data = req.body;
  console.log('INSERT SALE CONTROLLER', data);
  const result = await salesService.insertSale(data);
  res.status(201).json(result);
};
module.exports = {
  getAll,
  getById,
  insertSale,
};
