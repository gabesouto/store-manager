const { Router } = require('express');
const { 
    productIdValidation,
    quantityValidation,
    validateSingleProductId,
  } = require('../middlewares/sales.middlewares');

const { salesController } = require('../controllers');

const salesRouter = Router();

salesRouter.get('/', salesController.getAll);

salesRouter.get('/:id', salesController.getById);

salesRouter.post(
'/',
 productIdValidation,
quantityValidation,
validateSingleProductId,
salesController.insertSale,
);

salesRouter.put('/:id', salesController.updateSale);

salesRouter.delete('/:id', salesController.deleteSale);

module.exports = salesRouter;  