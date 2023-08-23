const { Router } = require('express');
const { 
    productIdValidation,
    quantityValidation,
    validateSingleProductId,
  } = require('../middlewares/salesMiddlewares');
const { salesController } = require('../controllers');

const salesRouter = Router();

salesRouter.get('/', salesController.getAll);

salesRouter.get('/:id', salesController.getById);

salesRouter.post('/', productIdValidation, quantityValidation, validateSingleProductId, salesController.insertSale);

salesRouter.delete('/:id', salesController.deleteSale);

module.exports = salesRouter;  