'use strict';

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OUTPUTCOLOR = 'blue';
var WARNINGCOLOR = 'red';

function translate(query) {
  (0, _ApiClient2.default)({ query: query }).then(function (resp) {
    if (resp.statusCode == 200) {
      if (resp.body.errorCode === '113') {
        console.log('请输入你要翻译的内容！'.red);
      } else {
        console.log('\n', ('' + resp.body.query)[OUTPUTCOLOR], '\n');

        var _ref = resp.body || {},
            translation = _ref.translation,
            basic = _ref.basic;

        var _ref2 = basic || {},
            explains = _ref2.explains;

        if (explains && explains.length > 0) {
          for (var k in explains) {
            var value = explains[k];
            var outputLine = k === '0' ? '\u7FFB\u8BD1\uFF1A' + value : '      ' + value;
            console.log('\n', outputLine[OUTPUTCOLOR], '\n');
          }
        } else if (translation) {
          console.log('\n', ('\u7FFB\u8BD1\uFF1A' + translation)[OUTPUTCOLOR], '\n');
        } else {
          console.log('\n', '\u6682\u65E0\u7FFB\u8BD1'[OUTPUTCOLOR], '\n');
        }
      }
    }
  });
}

module.exports = translate;