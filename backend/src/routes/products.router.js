const { Router } = require('express');
const { productsController } = require('../controllers');
const { nameValidation, validateSingleProductId } = require('../middlewares/products.middlewares');

const productsRouter = Router();

productsRouter.get('/', productsController.getAll);

productsRouter.get('/search', productsController.searchProduct);

productsRouter.get('/:id', productsController.getById);

productsRouter.post('/', nameValidation, productsController.insertProduct);

productsRouter
   .put('/:id', nameValidation, validateSingleProductId, productsController.updateProduct);

productsRouter.delete('/:id', productsController.deleteProduct);

module.exports = productsRouter;  