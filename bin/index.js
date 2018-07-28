#!/usr/bin/env node

var translate = require('../dist/index');

var text = '';
var len = process.argv.length;
for (let i = 2; i < len; i++) {
  text += process.argv[i] + ' ';
}
translate(text.trim());
