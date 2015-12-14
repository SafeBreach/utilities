var assert = require('assert');
var should = require('should');
var path = require('path');

var stackframes = require('../src/stackframes.js');

describe('StackFrames', function() {
  describe('#stackFrames(depth)', function () {
    it('should return filenmae (and line) name correctly', function () {
    	var currentFilename = module.filename.slice(__filename.lastIndexOf(path.sep)+1, module.filename.length);
    	// The element at position 2 holds the current filename (and line in the code, formatted filename:line)
    	stackframes.stackFrames()[2].should.startWith(currentFilename+":");
    });
  });
});