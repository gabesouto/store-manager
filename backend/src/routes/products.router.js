const { Router } = require('express');
const { productsController } = require('../controllers');
const { nameValidation, validateSingleProductId } = require('../middlewares/ProductsMiddlewares');

const productsRouter = Router();

productsRouter.get('/', productsController.getAll);

productsRouter.get('/:id', productsController.getById);

productsRouter.post('/', nameValidation, productsController.insertProduct);

productsRouter
   .put('/:id', nameValidation, validateSingleProductId, productsController.updateProduct);

productsRouter.delete('/:id', productsController.deleteProduct);

module.exports = productsRouter;  