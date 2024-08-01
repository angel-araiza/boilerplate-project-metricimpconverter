function ConvertHandler() {
  
  this.getNum = function(input) {
    const regex = /\d+(\.\d+)?(\/\d+)?/; //This is going to find any digits, and optionally followed by a decimal an other numbers
    let result = input.match(regex); //THis is how I can filter for the numbers
    return result ? result[0]: null;
  };
  
  this.getUnit = function(input) {
    const regex = /[a-z+A-Z]+/
    let result = input.match(regex);
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const unitMap = {
      "gal": "L",
      "L": "gal",
      "mi": "km",
      "km": "mi",
      "lbs": "kg",
      "kg": "lbs"
    };
    let result = unitMap[initUnit.toLowerCase()]|| "invalid unit";
    return result;
  };

  this.spellOutUnit = function(unit) {
    const spelledOutUnits = {
      "gal": "gallons",
      "l": "liters",
      "mi": "miles",
      "km": "kilometers",
      "lbs": "pounds",
      "kg": "kilograms"
    }
    let result = spelledOutUnits[unit.toLowerCase()]  || "invalid unit";
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit.toLowerCase()){
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi": 
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spelledOutUnits(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spelledOutUnits(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
