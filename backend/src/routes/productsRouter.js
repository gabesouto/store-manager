const { Router } = require('express');
const { productsController } = require('../controllers');
const { nameValidation } = require('../middlewares/ProductsMiddlewares');

const productsRouter = Router();

productsRouter.get('/', productsController.getAll);
productsRouter.get('/:id', productsController.getById);
productsRouter.post('/', nameValidation, productsController.insertProduct);

module.exports = productsRouter;  