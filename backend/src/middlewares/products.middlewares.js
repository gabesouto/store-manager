const { productsService } = require('../services');

function nameValidation(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') {
    return res.status(400).json({ message: '"name" is required' });
  }
  
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
}

async function validateSingleProductId(req, res, next) {
  const { id } = req.params;
  
  // Realize uma consulta no banco de dados para verificar se o productId existe
  const product = await productsService.getById(id);

  if (product.type === 'PRODUCT_NOT_FOUND') {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
}
module.exports = {
  nameValidation,
  validateSingleProductId,
};