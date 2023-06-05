const { expect, use } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const salesService = require('../../../src/services/salesService');
const salesController = require('../../../src/controllers/salesController');
const { allSales } = require('../../mocks/salesMock');

use(sinonChai);

describe('sales controller tests', function () {
  const req = {};
  const res = {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  describe('Testes da função getAll', function () {
    it('retorna a lista completa de vendas', async function () {
      // arrange
      sinon.stub(salesService, 'getAll').resolves(allSales);

      // act
      await salesController.getAll(req, res);

      // assert
      expect(res.status).to.be.calledWith(200);
      expect(res.json).to.be.calledWithExactly(allSales);
    });
  });
});