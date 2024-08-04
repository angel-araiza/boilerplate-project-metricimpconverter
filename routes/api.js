'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

let input_1 = "_p";
let input_2 = "g";
let input_3 = "32";
let input_4 = "invalid unit";

console.log(input_1);
//console.log(input_2);
console.log(convertHandler.getNum(input_1));
//console.log(convertHandler.getString(input_1, input_2,input_3,input_4));

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  

  app.route('/api/convert').get((req,res)=>{
    const input = req.query.input;

    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    
    const responseString = convertHandler.getString(initNum,initUnit,returnNum,returnUnit);
    if(initNum === 'invalid number' && initUnit === 'invalid unit'){
      let emsg ='invalid number and unit';
      return res.status(200).send(emsg);
    } else if( initNum === "invalid number") {
      let emsg = 'invalid number'
      return res.status(200).send(emsg)
    } else if( initUnit === "invalid unit"){
      let emsg = 'invalid unit'
      return res.status(200).send(emsg)
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
