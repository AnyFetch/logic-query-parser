'use strict';

function generateCutParser(type, length) {
  return function(str, lexemes) {
    lexemes.push({
      type: type,
      value: str.slice(0, length)
    });

    return str.slice(length);
  };
}

function endOfString(str, quoted, spaces) {
  if(quoted) {
    return str.charAt(0) === '"';
  }

  return spaces.indexOf(str.charAt(0)) !== -1;
}

function stringParser(str, lexemes, spaces) {
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
}

var types = {
  and: {
    regexp: 'and[^\\s]?',
    escaped: true,
    modifiers: 'i',
    parser: generateCutParser('and', 3)
  },
  or: {
    regexp: 'or[^\\s]?',
    escaped: true,
    modifiers: 'i',
    parser: generateCutParser('or', 3)
  },
  startBlock: {
    regexp: '\\(',
    escaped: true,
    parser: generateCutParser('startBlock', 1)
  },
  endBlock: {
    regexp: '\\)/',
    escaped: true, 
    parser: generateCutParser('endBlock', 1)
  },
  string: {
    regexp: '"?.*',
    parser: stringParser
  }
};

function clearSpaces(str, spaces) {
  var i = 0;

  while(i < str.length && spaces.indexOf(str.charAt(i)) !== -1) {
    i += 1;
  }

  return str.slice(i);
}

module.exports.strToLexemes = function strToLexemes(str, spaces) {
  var lexemes = [];

  str = clearSpaces(str, spaces);
  while(str.length > 0) {
    var ret = Object.keys(types).some(function(name) {
      var regexp = new RegExp('^(' + (types[name].escaped ? '[^\\\\]?' : '') + types[name].regexp + ')', types[name].modifiers);

      if(regexp.test(str)) {
        str = types[name].parser(str, lexemes, spaces);
        return true;
      }

      return false;
    });

    if(!ret) {
      throw new Error("Unknow character : " + str.charAt(0));
    }

    str = clearSpaces(str, spaces);
  }

  return lexemes;
};