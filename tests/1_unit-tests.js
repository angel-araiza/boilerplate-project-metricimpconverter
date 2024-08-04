const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  test('whole number input', function () {
    let input = "32kg";
    let expectedOutput = 32;
    assert.strictEqual(convertHandler.getNum(input), expectedOutput);
  });
  test(' correctly read a decimal number input', function(){
    let input = "3.3kg";
    let expectedOutput = 3.3;
    assert.strictEqual(convertHandler.getNum(input), expectedOutput);
  });
  test('correctly read a fractional input.', function(){
    let input = "1/2gal";
    let expectedOutput = 0.5;
    assert.strictEqual(convertHandler.getNum(input), expectedOutput);
  });
  test('correctly read a fractional input with a decimal.', function(){
    let input = "0.5/2gal";
    let expectedOutput = .25;
    assert.strictEqual(convertHandler.getNum(input), expectedOutput);
  });
  test('correctly return an error on a double-fraction', function(){
    let input = "3/2/3";
    let expectedOutput = "invalid number";
    assert.strictEqual(convertHandler.getNum(input), expectedOutput);
  });
  test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', function(){
    let input = "";
    let expectedOutput = 1;
    assert.strictEqual(convertHandler.getNum(input), expectedOutput)
  });
  test('should correctly read each valid input unit.', function(){
    let input = "1gal";
    let expectedOutput = "gal";
    assert.strictEqual(convertHandler.getUnit(input), expectedOutput);
  });
  test('should correctly return an error for an invalid input unit.', function(){
    let input = "10oz";
    let expectedOutput = "invalid unit";
    assert.strictEqual(convertHandler.getUnit(input), expectedOutput);
  });
  test('should return the correct return unit for each valid input unit.', function(){
    let input = "1L";
    let expectedOutput = "L"
    assert.strictEqual(convertHandler.getUnit(input), expectedOutput);
  });
  test('should correctly return the spelled-out string unit for each valid input unit.', function () {
    let input = "mi";
    let expectedOutput = "miles";
    assert.strictEqual(convertHandler.spellOutUnit(input), expectedOutput);
  });
  test('convertHandler should correctly convert gal to L.', function(){
    let input_1 = 1;
    let input_2 = "gal";
    let expectedOutput = 3.78541;
    assert.strictEqual(convertHandler.convert(input_1, input_2), expectedOutput);
  });
  test('convertHandler should correctly convert L to gal.', function(){
    let input_1 = 2;
    let input_2 = "L";
    let expectedOutput = 0.52834;
    assert.strictEqual(convertHandler.convert(input_1, input_2), expectedOutput);
  });
  test('convertHandler should correctly convert mi to km.', function(){
    let input_1 = 1;
    let input_2 = "mi";
    let expectedOutput = 1.60934;
    assert.strictEqual(convertHandler.convert(input_1, input_2), expectedOutput);
  });
  test('convertHandler should correctly convert km to mi.', function(){
    let input_1 = 2;
    let input_2 = "km";
    let expectedOutput = 1.24275;
    assert.strictEqual(convertHandler.convert(input_1, input_2), expectedOutput);
  });
  test('convertHandler should correctly convert lbs to kg.', function(){
    let input_1 = 10;
    let input_2 = "lbs";
    let expectedOutput = 4.53592;
    assert.strictEqual(convertHandler.convert(input_1, input_2), expectedOutput);
  });
  test('convertHandler should correctly convert kg to lbs.', function(){
    let input_1 = 1;
    let input_2 = "kg";
    let expectedOutput = 2.20462;
    assert.strictEqual(convertHandler.convert(input_1, input_2), expectedOutput);
  });
});