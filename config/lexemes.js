var lexerHelper = require('../lib/helpers/lexer.js');

module.exports = {
  and: {
    regexp: 'and[^\\s]?',
    escaped: true,
    modifiers: 'i',
    lexer: lexerHelper.generateCutLexer('and', 3),
  },
  or: {
    regexp: 'or[^\\s]?',
    escaped: true,
    modifiers: 'i',
    lexer: lexerHelper.generateCutLexer('or', 3)
  },
  startBlock: {
    regexp: '\\(',
    escaped: true,
    lexer: lexerHelper.generateCutLexer('startBlock', 1)
  },
  endBlock: {
    regexp: '\\)/',
    escaped: true, 
    lexer: lexerHelper.generateCutLexer('endBlock', 1)
  },
  string: {
    regexp: '"?.*',
    lexer: lexerHelper.stringLexer
  }
};