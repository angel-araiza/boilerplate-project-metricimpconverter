'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

let input_1 = "3/7.2/4";
let input_2 = "kg";
/*
console.log(input_1);
console.log(input_2);
console.log(convertHandler.getNum(input_1));
*/
module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  

  app.route('/api/convert').get((req,res)=>{
    const input = req.query.input;

    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    console.log(initUnit);
    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    
    const responseString = convertHandler.getString(initNum,initUnit,returnNum,returnUnit);
    if(initNum === 'invalid number' && initUnit === 'invalid unit'){
      let emsg ='invalid number and unit';
      res.text({emsg});
    } else if( initNum === "invalid number") {
      let emsg = 'invalid number'
      res.text({emsg})
    } else if( initUnit === "invalid unit"){
      let emsg = 'invalid unit'
      res.text({emsg})
    }else(
    res.json({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: responseString
    }));
  })

};
