'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  
  app.route('/api/convert').get((req,res)=>{
    const input = req.body.input;

    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    const returnNum = convertHandler.convert(initNum, initNum);
    const returnUnit = convertHandler.getReturnUnit(initUnit);

    const responseString = convertHandler.getString(initNum,initUnit,returnNum,returnUnit);
    res.json({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: responseString
    })
   
  })

};
