var expect = require('chai').expect;
var http = require('http');

describe('Homepage', function() {

  it('responds with an ok status code', function(done) {
    http.get('/', function(res) {
      expect(res.statusCode).to.eql(200);
      done();
    });
  });
});

describe('Unknown page', function() {

  it('responds with an error status code', function(done) {
    http.get('/foobar', function(res) {
      expect(res.statusCode).to.eql(404);
      done();
    });
  });
});



