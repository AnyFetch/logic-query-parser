'use strict';

require('should');

var tests = require('../config/tests.js');

var parser = require('../lib/index.js');

describe('Tests binaryTree', function() {
  var count = 0;

  tests.forEach(function(test) {
    count += 1;

    it('should work for test ' + count + ' : ' + test.string, function(done) {
      try {
        var tree = parser.parse(test.string);

        if(test.tree) {
          //console.log(JSON.stringify(tree, false, 2));
          tree.should.eql(test.tree);
        }

        done();
      }
      catch(e) {
        if(!test.err) {
          return done(e);
        }

        e.toString().should.containDeep(test.err);
        done();
      }
    });
  });
});