'use strict';

var lexemes = require('../config/lexemes.js');

module.exports.lexemesArrayToBinaryTree = function lexemesArrayToBinaryTree(options, lexemesArray) {
  var i = 0;

  function createTree(end, newI) {
    var tree = {};

    if(newI) {
      i = newI;
    }

    while (lexemesArray[i] && lexemesArray[i].type !== end) {
      var temp = lexemes[lexemesArray[i].type].syntaxer(lexemesArray, i, tree, createTree);

      if(temp) {
        i = temp;
      }
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