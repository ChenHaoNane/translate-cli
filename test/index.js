var assert = require('assert');
var translate = require('../dist/index.js');

describe('translate hello', function() {
  it('hello', function() {
    translate('hello');
    translate('hello world');
  })
});