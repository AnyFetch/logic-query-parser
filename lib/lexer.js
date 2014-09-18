'use strict';

var lexemes = require('../config/lexemes.js');
var helpers = require('./helpers/lexer.js');

module.exports.strToLexemes = function strToLexemes(str, spaces) {
  var lexemesArray = [];

  str = helpers.clearSpaces(str, spaces);
  while(str.length > 0) {
    var escaped = false;

    if(str.charAt(0) === '\\') {
      escaped = true;
      str = str.slice(1);

      if(str.length === 0) {
        throw new Error("Backslash at end of string");
      }
    }

    var ret = Object.keys(lexemes).some(function(name) {
      if(escaped && lexemes[name].escaped) {
        return false;
      }

      var regexp = helpers.generateRegexp(lexemes[name]);

      if(regexp.test(str)) {
        str = lexemes[name].lexer(str, lexemesArray, spaces);
        return true;
      }

      return false;
    });

    if(!ret) {
      throw new Error("Unknow character : " + str.charAt(0));
    }

    str = helpers.clearSpaces(str, spaces);
  }

  return lexemesArray;
};