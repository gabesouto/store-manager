const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

describe('Product API', function () {
  describe('GET /products', function () {
    it('should return all products', function (done) {
      chai
        .request('http://localhost:3001')
        .get('/products')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
});
