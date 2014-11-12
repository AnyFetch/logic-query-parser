'use strict';

module.exports.binaryTreeToQueryJson = function binaryTreeToQueryJson(tree) {
  var query = {};

  if(!tree || !tree.lexeme) {
    return query;
  }

  var cursor = tree;
  var currentType = tree.lexeme.type;

  query.type = currentType;

  if(currentType === 'string') {
    query.value = tree.lexeme.value;
    return query;
  }

  query.values = [];

  while(cursor && cursor.lexeme.type === currentType) {

    if(cursor.left) {
      query.values.push(binaryTreeToQueryJson(cursor.left));
    }

    cursor = cursor.right;
  }

  if(cursor) {
    query.values.push(binaryTreeToQueryJson(cursor));
  }

  return query;
};
