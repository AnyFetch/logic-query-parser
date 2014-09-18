'use strict';

var lexemes = require('../config/lexemes.js');
var helpers = require('./helpers/lexer.js');

module.exports.strToLexemes = function strToLexemes(str, spaces) {
  var lexemesArray = [];

  str = helpers.clearSpaces(str, spaces);
  while(str.length > 0) {
    var ret = Object.keys(lexemes).some(function(name) {
      var regexp = new RegExp('^(' + (lexemes[name].escaped ? '[^\\\\]?' : '') + lexemes[name].regexp + ')', lexemes[name].modifiers);

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