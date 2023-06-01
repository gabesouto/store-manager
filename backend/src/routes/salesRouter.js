const { Router } = require('express');
const { productIdValidation,
   quantityValidation,
   validateSingleProductId,
  } = require('../middlewares/salesMiddlewares');
const { salesController } = require('../controllers');

const salesRouter = Router();

salesRouter.get('/', salesController.getAll);
salesRouter.get('/:id', salesController.getById);
salesRouter.post(
'/', 
productIdValidation,
quantityValidation,
// validateSingleProductId,

validateSingleProductId,

// validateMultipleProductIds, 
salesController.insertSale,
);

module.exports = salesRouter;  