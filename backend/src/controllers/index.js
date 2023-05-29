/* Este vai ser o único lugar do nosso código onde importamos o objeto Model direto do seu arquivo */

const productsController = require('./productsController');
const salesController = require('./salesController');

module.exports = {
  productsController,
  salesController,
};