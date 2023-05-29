// tests/unit/models/products.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');

// const connection = require('../../../src/models/connection');
// const { allSales } = require('../../mocks/salesMock');

describe('Testes de unidade do model de produtos', function () {
  afterEach(function () {
    sinon.restore();
  });

  // it('Recuperando a lista de produtos', async function () {
  //   // Arrange
  //   sinon.stub(connection, 'execute').resolves([allSales]);
  //   // Act
  //   const result = await salesModel.getAll();
  //   // Assert
  //   expect(result).to.be.deep.equal(allSales);
  // });

  it('retorna um erro caso receba um ID inválido', async function () {
    // Arrange (no need for specific arrangement in this test case)
    
    // Act
    const result = await salesService.getById('a');
    
    // Assert
    expect(result.type).to.equal('SALE_NOT_FOUND');
    expect(result.message).to.equal('Sale not found');
  });

  it('retorna um erro caso a pessoa passageira não existe', async function () {
    // Arrange
    sinon.stub(salesModel, 'getById').resolves(undefined);
   
    // Act
    const result = await salesService.getById(1);
    
    // Assert
    expect(result.type).to.equal('SALE_NOT_FOUND');
    expect(result.message).to.equal('Sale not found');
  });

  // it('retorna a pessoa passageira caso ID existente', async function () {
  //   // Arrange
  //   sinon.stub(salesModel, 'getById').resolves(allSales[0]);
    
  //   // Act
  //   const result = await salesService.getById(1);

  //   // Assert
  //   expect(result).to.deep.equal(allSales[0]);
  // });
});
