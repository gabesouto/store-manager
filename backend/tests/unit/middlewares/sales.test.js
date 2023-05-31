const sinon = require('sinon');
const { productIdValidation } = require('../../../src/middlewares/salesMiddlewares');

describe('productIdValidation', function () {
  it('should return 400 error if "name" is missing', function () {
    const req = {
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    productIdValidation(req, res, next);

    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 400);
    sinon.assert.calledOnce(res.json);
    sinon.assert.calledWith(res.json, { message: '"productId" is required' });
    sinon.assert.notCalled(next);
  });

  it('should return 422 error if "quantity" length is more than 0', function () {
    const req = {
      body: {
        quantity: 0,
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    nameValidation(req, res, next);

    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 422);
    sinon.assert.calledOnce(res.json);
    sinon.assert
    .calledWith(res.json, { message: '"name" length must be at least 5 characters long' });
    sinon.assert.notCalled(next);
  });

  it('should call next middleware if "name" is valid', function () {
    const req = {
      body: {
        name: 'Product Name',
      },
    };
    const res = {
      status: sinon.stub(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    nameValidation(req, res, next);

    sinon.assert.notCalled(res.status);
    sinon.assert.notCalled(res.json);
    sinon.assert.calledOnce(next);
  });
});
