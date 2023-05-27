const { Router } = require('express');
const { productsController } = require('../controllers');

const productsRouter = Router();

productsRouter.get('/', productsController.getAll);
productsRouter.get('/:id', productsController.getById);

module.exports = productsRouter;  