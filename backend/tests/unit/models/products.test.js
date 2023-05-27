// tests/unit/models/products.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');

const connection = require('../../../src/models/connection');
const { allProducts } = require('../../mocks/productsMock');

describe('Testes de unidade do model de produtos', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Recuperando a lista de produtos', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([allProducts]);
    // Act
    const result = await productsModel.getAll();
    // Assert
    expect(result).to.be.deep.equal(allProducts);
  });

  it('retorna um erro caso receba um ID inválido', async function () {
    // Arrange (no need for specific arrangement in this test case)
    
    // Act
    const result = await productsService.getById('a');
    
    // Assert
    expect(result.type).to.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.equal('Product not found');
  });

  it('retorna um erro caso a pessoa passageira não existe', async function () {
    // Arrange
    sinon.stub(productsModel, 'getById').resolves(undefined);
   
    // Act
    const result = await productsService.getById(1);
    
    // Assert
    expect(result.type).to.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.equal('Product not found');
  });

  it('retorna a pessoa passageira caso ID existente', async function () {
    // Arrange
    sinon.stub(productsModel, 'getById').resolves(allProducts[0]);
    
    // Act
    const result = await productsService.getById(1);

    // Assert
    expect(result).to.deep.equal(allProducts[0]);
  });
});
