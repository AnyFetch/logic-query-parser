'use strict';

module.exports.generateCutLexer = function generateCutLexer(type, length) {
  return function(str, lexemes) {
    lexemes.push({
      type: type,
      value: str.slice(0, length)
    });

    return str.slice(length);
  };
};

function endOfString(str, quoted, spaces) {
  if(quoted) {
    return str.charAt(0) === '"';
  }

  return spaces.indexOf(str.charAt(0)) !== -1;
}

module.exports.stringLexer = function stringLexer(str, lexemes, spaces) {
  var i = 0;
  var quoted = false;
  var value = "";

  if(str.charAt(0) === '"') {
    quoted = true;
    i = 1;
    str = str.slice(1);
  }

  while(!endOfString(str, quoted, spaces)) {
    if(str.charAt(0) === '\\') {
      value += str.charAt(1);
      str = str.slice(2);
    }

    value += str.charAt(0);
    str = str.slice(1);
  }

  lexemes.push({
    type: "string",
    value: value
  });

  return str.slice(1);
};

module.exports.clearSpaces = function clearSpaces(str, spaces) {
  var i = 0;

  while(i < str.length && spaces.indexOf(str.charAt(i)) !== -1) {
    i += 1;
  }

  return str.slice(i);
};