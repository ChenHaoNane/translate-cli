'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Request;

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL = 'http://openapi.youdao.com/api';
var APPKEY = '2e6b4c24c9f4f547';
var KEY = 'SXHBjShbOHE6NJf9CKmsAWqkTz05xVcd';

function Request(_ref) {
  var query = _ref.query,
      _ref$from = _ref.from,
      from = _ref$from === undefined ? 'EN' : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === undefined ? 'zh_CHS' : _ref$to,
      _ref$ext = _ref.ext,
      ext = _ref$ext === undefined ? 'mp3' : _ref$ext,
      _ref$voice = _ref.voice,
      voice = _ref$voice === undefined ? 0 : _ref$voice;

  var md5 = _crypto2.default.createHash('md5');
  var salt = Math.random() * 100 | 0;
  var SIGN = md5.update(APPKEY + query + salt + KEY).digest('hex');
  return _superagent2.default.get(URL).query({
    q: query,
    from: from,
    to: to,
    appKey: APPKEY,
    sign: SIGN,
    ext: ext,
    voice: voice,
    salt: salt
  });
}