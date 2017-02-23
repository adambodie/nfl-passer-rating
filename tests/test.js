var chai = require('chai');
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style

describe('aValue', function(){
var aValue = require('../components/aValue.js');
   var expectedValue;

  it('returns an error', function() {
    expectedValue = "More completions than attempts not allowed";
    expect(aValue(20,10)).to.equal(expectedValue);
  });

  it('should be a string', function () {
    assert.typeOf(aValue(60,30), 'string');
  });

  it('returns zero', function() {
    expectedValue = 0;
    expect(aValue(2,20)).to.equal(expectedValue);
  });

  it('returns the maximum value allowed', function() {
    expectedValue = 2.375;
    expect(aValue(25,30)).to.equal(expectedValue);
  });

  it('returns the correct value', function() {
    expectedValue = 1;
    expect(aValue(15,30)).to.equal(expectedValue);
  });
  it('should be a number', function () {
    assert.typeOf(aValue(15,30), 'number');
  });

});
