const { Router } = require('express');
const { salesController } = require('../controllers');

const salesRouter = Router();

salesRouter.get('/', salesController.getAll);
salesRouter.get('/:id', salesController.getById);

module.exports = salesRouter;  