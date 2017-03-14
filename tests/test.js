var chai = require('chai');
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style

describe('aValue', function(){
var aValue = require('../scripts/aValue.js');
   var expectedValue;

   it('must be greater than or equal to zero', function() {
     expectedValue = "Must be greater than or equal to zero";
     expect(aValue(-1,-1)).to.equal(expectedValue);
   });

  it('must have more attempts than completions', function() {
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
var bValue = require('../scripts/bValue.js');
   var expectedValue;

   it('needs at least one attempt to produce a B value', function() {
     expectedValue = "Need at least one attempt to produce a B value";
     expect(bValue(2,0)).to.equal(expectedValue);
   });


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
var cValue = require('../scripts/cValue.js');
   var expectedValue;

   it('must be greater than or equal to zero', function() {
     expectedValue = "Must be greater than or equal to zero";
     expect(cValue(-1,-1)).to.equal(expectedValue);
   });

   it('must have more attempts than touchdowns', function() {
     expectedValue = "More touchdowns than attempts not allowed";
     expect(cValue(2,1)).to.equal(expectedValue);
   });

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
var dValue = require('../scripts/dValue.js');
   var expectedValue;

   it('must be greater than or equal to zero', function() {
     expectedValue = "Must be greater than or equal to zero";
     expect(dValue(-1,-1)).to.equal(expectedValue);
   });

   it('must have more attempts than interceptions', function() {
     expectedValue = "More interceptions than attempts not allowed";
     expect(dValue(2,1)).to.equal(expectedValue);
   });

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

describe('eValue', function(){
var eValue = require('../scripts/eValue.js');
   var expectedValue;

   it('returns zero', function() {
     expectedValue = 0;
     expect(eValue(0,0,0,0)).to.equal(expectedValue);
   });

   it('returns the maximum value allowed', function() {
     expectedValue = 158.3;
     expect(eValue(2.375,2.375,2.375,2.375)).to.equal(expectedValue);
   });

});
