function ConvertHandler() {
  
  this.getNum = function(input) {
    const rx = /\d/;
    let firstCheck = input.match(rx);
    !firstCheck? input = "1": firstCheck;
    const regex = /\d+(\/\d\.\d\/\d+)?(\.\d+)?(\/\d+\/\d+)?(\/\d+)?/; //This is going to find any digits, and optionally followed by a decimal an other numbers
    let result= input.match(regex);
    input === ""? result = ["1"]: result ;
 
    if (!result) return "invalid number";
    let numStr = result[0];
    const parts = numStr.split('/');

    if (parts.length > 2){
      return "invalid number";
    }
    if (numStr.includes('/') && parts.length === 2){
      let [numerator, denominator] = numStr.split('/').map(Number);
      return numerator / denominator;
    }
    return parseFloat(numStr);
  };
  
  this.getUnit = function(input) {
    const regex = /(gal|L|mi|km|lbs|kg)/i;
    let result = input.match(regex);
    if(result === "l"){
      return "L";
    }
    return result ? result[0] : "invalid unit";
  };
  
  this.getReturnUnit = function(initUnit) {
    const unitMap = {
      "gal": "L",
      "l": "gal",
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
      case "l":
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
    result === "invalid unit"? result: result = parseFloat(result.toFixed(5));
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
