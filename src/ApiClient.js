import request from 'superagent';
import crypto from 'crypto';


const URL = 'http://openapi.youdao.com/api';
const APPKEY = '2e6b4c24c9f4f547';
const KEY = 'SXHBjShbOHE6NJf9CKmsAWqkTz05xVcd';

export default function Request({ query, from = 'EN', to = 'zh_CHS', ext = 'mp3', voice = 0}) {
  var md5 = crypto.createHash('md5');
  const salt = (Math.random() * 100) | 0;
  const SIGN = md5.update(APPKEY + query + salt + KEY).digest('hex');
  return request.get(URL)
          .query({
            q: query,
            from,
            to,
            appKey: APPKEY,
            sign: SIGN,
            ext,
            voice,
            salt,
          });
}
