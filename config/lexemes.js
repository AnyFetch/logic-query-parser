var lexerHelper = require('../lib/helpers/lexer.js');
var syntaxerHelper = require('../lib/helpers/syntaxer.js');

var andLexeme = {
  regexp: 'and[^\\s]?',
  escaped: true,
  modifiers: 'i',
  lexer: lexerHelper.generateCutLexer('and', 3),
  syntaxer: syntaxerHelper.andSyntaxer,
  priority: 5,
  checker: ['endBlock', null]
};

var orLexeme = {
  regexp: 'or[^\\s]?',
  escaped: true,
  modifiers: 'i',
  lexer: lexerHelper.generateCutLexer('or', 3),
  checker: ['endBlock', null]
};

var startBlockLexeme = {
  regexp: '\\(',
  escaped: true,
  lexer: lexerHelper.generateCutLexer('startBlock', 1),
  checker: ['endBlock', null]
};

var endBlockLexeme = {
  regexp: '\\)',
  escaped: true, 
  lexer: lexerHelper.generateCutLexer('endBlock', 1),
};

var stringLexeme = {
  regexp: '"?.*',
  lexer: lexerHelper.stringLexer([startBlockLexeme, endBlockLexeme]),
  syntaxer: syntaxerHelper.stringSyntaxer,
  priority: 0
};

module.exports = {
  and: andLexeme,
  or: orLexeme,
  startBlock: startBlockLexeme,
  endBlock: endBlockLexeme,
  string: stringLexeme
};