var optimiser = require('../lib/index');
var goodModule = require('./goodModule');
var badModule = require('./badModule');
var expect = require('chai').expect;

var args = [1, 2];
var successString = 'Function is optimized';
var failureString = 'Function is not optimized';

describe('V8 Optimiser', function () {

  it('returns success string if optimised', function () {
      var optimiserResult = optimiser(goodModule, args);
      expect(optimiserResult).to.equal(successString);
  });

  it('returns failure string if optimised', function () {
      var optimiserResult = optimiser(badModule, args);
      expect(optimiserResult).to.equal(failureString);
  });
});
