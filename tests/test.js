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


describe('bValue', function(){
var bValue = require('../components/bValue.js');
   var expectedValue;

  it('returns zero', function() {
    expectedValue = 0;
    expect(bValue(2,20)).to.equal(expectedValue);
  });

  it('returns the maximum value allowed', function() {
    expectedValue = 2.375;
    expect(bValue(250,20)).to.equal(expectedValue);
  });

  it('returns the correct value', function() {
    expectedValue = 1.75;
    expect(bValue(300,30)).to.equal(expectedValue);
  });
  it('should be a number', function () {
    assert.typeOf(bValue(15,30), 'number');
  });

});

describe('cValue', function(){
var cValue = require('../components/cValue.js');
   var expectedValue;

  it('returns zero', function() {
    expectedValue = 0;
    expect(cValue(0,25)).to.equal(expectedValue);
  });

  it('returns the maximum value allowed', function() {
    expectedValue = 2.375;
    expect(cValue(5,20)).to.equal(expectedValue);
  });

  it('returns the correct value', function() {
    expectedValue = 1;
    expect(cValue(1,20)).to.equal(expectedValue);
  });

  it('should be a number', function () {
    assert.typeOf(cValue(2,30), 'number');
  });

});

describe('dValue', function(){
var dValue = require('../components/dValue.js');
   var expectedValue;

  it('returns zero', function() {
    expectedValue = 0;
    expect(dValue(3,25)).to.equal(expectedValue);
  });

  it('returns the maximum value allowed', function() {
    expectedValue = 2.375;
    expect(dValue(0,20)).to.equal(expectedValue);
  });

  it('returns the correct value', function() {
    expectedValue = 0.7083333333333333;
    expect(dValue(2,30)).to.equal(expectedValue);
  });

  it('should be a number', function () {
    assert.typeOf(dValue(1,30), 'number');
  });

});
