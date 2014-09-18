'use strict';

function getLowPriorityBlock(tree, priority) {
  var lexemes = require('../../config/lexemes.js');

  if(priority === undefined) {
    priority = -1;
  }

  if(!tree.lexeme || lexemes[tree.lexeme.type].priority < priority || tree.right === null) {
    return tree;
  }

  return getLowPriorityBlock(tree.right, priority);
}

module.exports.stringSyntaxer = function stringSyntaxer(lexemesArray, i, tree) {
  var lexemes = require('../../config/lexemes.js');
  var block = getLowPriorityBlock(tree, lexemes.string.priority);

  if(block.lexeme) {
    throw new Error("TO-DO : Default operator");
  }

  block.lexeme = {
    type: 'string',
    value: lexemesArray[i].value,
  };

  block.left = null;
  block.right = null;

  return i + 1;
};

module.exports.andSyntaxer = function andSyntaxer(lexemesArray, i, tree) {
  var lexemes = require('../../config/lexemes.js');
  var block = getLowPriorityBlock(tree, lexemes.and.priority);

  var tempLexeme = {
    type: block.lexeme.type,
    value: block.lexeme.value
  };

  block.lexeme = {
    type: 'and'
  };

  block.left = {
    lexeme: tempLexeme,
    left: block.left,
    right: block.right
  };

  block.right = {};

  return i + 1;
};