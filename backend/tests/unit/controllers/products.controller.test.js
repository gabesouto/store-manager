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

  describe('Testes da função getAll', function () {
    it('retorna a lista completa de produtos', async function () {
      // arrange
      sinon.stub(productsService, 'getAll').resolves(allProducts);

      // act
      await productsController.getAll(req, res);

      // assert
      expect(res.status).to.be.calledWith(200);
      expect(res.json).to.be.calledWithExactly(allProducts);
    });
  });

  describe('Testes da função getById', function () {
      it('retorna um erro caso o id não exista', async function () {
        // Insere um id no req.params
        req.params = { id: 99 };
        // arrange
        sinon.stub(productsService, 'getById')
          .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });
        // act
        await productsController.getById(req, res);
        // assert
        expect(res.status).to.be.calledWith(404);
        expect(res.json).to.be.calledWithExactly({ message: 'Product not found' });
      });

      it('retorna o produto caso o id exista', async function () {
        // Insere um id no req.params
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