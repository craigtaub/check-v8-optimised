var optimiser = require('../lib/index');
var goodModule = require('./goodModule');
var badModule = require('./badModule');
var expect = require('chai').expect;

var argumentString = '1,2';
var success = 'Function is optimized';
var failure = 'Function is not optimized';

describe('V8 Optimiser', function () {

  it('returns success string if optimised', function () {
      var optimiserResult = optimiser(goodModule, argumentString);
      expect(optimiserResult).to.equal('Function is optimized');
  });

  it('returns failure string if optimised', function () {
      var optimiserResult = optimiser(badModule, argumentString);
      expect(optimiserResult).to.equal('Function is not optimized');
  });
})
