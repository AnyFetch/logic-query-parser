'use strict';

var lexemes = require('../config/lexemes.js');

function check(current, next, config) {
  for(var i = 0, c = config.length; i < c; i += 1) {
    if(next === config[i]) {
      throw new Error((next ? next : 'end of string') + " just after " + current);
    }
  }
}

module.exports.check = function doCheck(lexemesArray) {
  var i = 0;
  var next = null;

  while(lexemesArray[i]) {
    next = lexemesArray[i + 1];

    if(lexemes[lexemesArray[i].type].checker) {
      check(lexemesArray[i].type, (next) ? next.type : null, lexemes[lexemesArray[i].type].checker);
    }

    i += 1;
  }
};