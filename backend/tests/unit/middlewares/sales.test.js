const sinon = require('sinon');
const { productIdValidation,
   quantityValidation,
    validateSingleProductId } = require('../../../src/middlewares/salesMiddlewares');
const { productsService } = require('../../../src/services');

describe('productIdValidation', function () {
  it('should return 400 error if "productId" is missing', function () {
    const req = {
      body: [{}],
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
      body: [{
        productId: 1,
        quantity: 0, 
      }],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    quantityValidation(req, res, next);

    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 422);
    sinon.assert.calledOnce(res.json);
    sinon.assert
    .calledWith(res.json, { message: '"quantity" must be greater than or equal to 1' });
    sinon.assert.notCalled(next);
  });
  it('should return 422 error if "quantity" length is not negative', function () {
    const req = {
      body: [{
        productId: 1,
        quantity: -1, 
      }],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    quantityValidation(req, res, next);

    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 422);
    sinon.assert.calledOnce(res.json);
    sinon.assert
    .calledWith(res.json, { message: '"quantity" must be greater than or equal to 1' });
    sinon.assert.notCalled(next);
  });
  it('should return 400 error if "quantity" not exists', function () {
    const req = {
      body: [{
        productId: 1,
  
      }],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    quantityValidation(req, res, next);

    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 400);
    sinon.assert.calledOnce(res.json);
    sinon.assert
    .calledWith(res.json, { message: '"quantity" is required' });
    sinon.assert.notCalled(next);
  });
  it('should call next middleware if "quantity" is valid', function () {
    const req = {
      body: [{
        productId: 1,
        quantity: 6,
      }],
    };
    const res = {
      status: sinon.stub(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    quantityValidation(req, res, next);

    sinon.assert.notCalled(res.status);
    sinon.assert.notCalled(res.json);
    sinon.assert.calledOnce(next);
  });
  it('should call next middleware if "productId" is valid', function () {
    const req = {
      body: [{
        productId: 1,
        quantity: 6,
      }],
    };
    const res = {
      status: sinon.stub(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    productIdValidation(req, res, next);

    sinon.assert.notCalled(res.status);
    sinon.assert.notCalled(res.json);
    sinon.assert.calledOnce(next);
  });

  describe('validateSingleProductId middleware', function () {
    beforeEach(function () {
      sinon.restore();
    });
  
    it('should return 404 error if product is not found', async function () {
      const req = {
        body: {
          productId: 12345, // Assuming the product ID that doesn't exist
        },
      };
  
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };
  
      // Mocking the getById method to return a product not found response
      sinon.stub(productsService, 'getById').resolves({ type: 'PRODUCT_NOT_FOUND' });
  
      await validateSingleProductId(req, res, sinon.stub());
  
      sinon.assert.calledOnceWithExactly(productsService.getById, req.body.productId);
      sinon.assert.calledWithExactly(res.status, 404);
      sinon.assert.calledWithExactly(res.json, { message: 'Product not found' });
    });
  
    it('should call the next middleware if product is found', async function () {
      const req = {
        body: {
          productId: 12345, // Assuming the product ID that exists
        },
      };
  
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };
  
      // Mocking the getById method to return a valid product
      sinon.stub(productsService, 'getById').returns({ type: 'PRODUCT_FOUND' });
  
      const next = sinon.stub();
  
      await validateSingleProductId(req, res, next);
  
      sinon.assert.calledOnceWithExactly(productsService.getById, req.body.productId);
      sinon.assert.notCalled(res.status);
      sinon.assert.notCalled(res.json);
      sinon.assert.calledOnce(next);
    });
  });
});
