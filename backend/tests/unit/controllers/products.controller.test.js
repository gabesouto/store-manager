const { expect, use } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productsService = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController');
const { allProducts } = require('../../mocks/productsMock');

use(sinonChai);

describe('products controller tests', function () {
  const req = {};
  const res = {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  describe('Tests for getAll function', function () {
    it('returns the complete list of products', async function () {
      // arrange
      sinon.stub(productsService, 'getAll').resolves(allProducts);

      // act
      await productsController.getAll(req, res);

      // assert
      expect(res.status).to.be.calledWith(200);
      expect(res.json).to.be.calledWithExactly(allProducts);
    });
  });

  describe('Tests for getById function', function () {
    it('returns an error if the id does not exist', async function () {
      // Set an id in req.params
      req.params = { id: 100 };
      // arrange
      sinon.stub(productsService, 'getById')
        .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });
      // act
      await productsController.getById(req, res);
      // assert
      expect(res.status).to.be.calledWith(404);
      expect(res.json).to.be.calledWithExactly({ message: 'Product not found' });
    });

    it('returns the product if the id exists', async function () {
      // Set an id in req.params
      req.params = { id: 1 };
      // arrange
      sinon.stub(productsService, 'getById').resolves(allProducts[0]);
      // act
      await productsController.getById(req, res);
      // assert
      expect(res.status).to.be.calledWith(200);
      // expect(res.json).to.be.calledWithExactly(allProducts[0]);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
