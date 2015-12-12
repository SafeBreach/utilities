var assert = require('assert');
var should = require('should');
var path = require('path');

var stackframes = require('../src/stackframes.js');

describe('StackFrames', function() {
  describe('#stackFrames(depth)', function () {
    it('should return function name correctly', function () {
    	var currentFilename = module.filename.slice(__filename.lastIndexOf(path.sep)+1, module.filename.length);
    	stackframes.stackFrames(2)[2].should.startWith(currentFilename);
    });
  });
});