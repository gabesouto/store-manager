// // tests/unit/models/passenger.model.test.js
// const { expect } = require('chai');
// const sinon = require('sinon');
// const productModel = require('../../../src/models');

// const connection = require('../../../src/models/connection');
// const { allProducts } = require('../../mocks/productsMock');

// describe('Testes de unidade do model de pessoas passageiras', function () {
//   it('Recuperando a lista de pessoas passageiras', async function () {
//     // Arrange
//     sinon.stub(connection, 'execute').resolves([allProducts]);
//       // Act
//     const result = await productModel.getAll();
//     // Assert
//     expect(result).to.be.deep.equal(allProducts);
//   });
// });