'use strict';

var lexemes = require('../config/lexemes.js');

module.exports.lexemesArrayToBinaryTree = function lexemesArrayToBinaryTree(options, lexemesArray) {
  var i = 0;

  function createTree(end) {
    var tree = {};

    while (lexemesArray[i] && lexemesArray[i].type !== end) {
      i = lexemes[lexemesArray[i].type].syntaxer(lexemesArray, i, tree);
    }

    if(end && !lexemesArray[i]) {
      throw new Error('Bad end of block');
    }
    else if(end) {
      i += 1;
    }

    return tree;
  }

  return createTree(null);
};