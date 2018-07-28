import request from'./ApiClient';
import colors from 'colors';

const OUTPUTCOLOR = 'blue';
const WARNINGCOLOR = 'red';

function translate(query) {
  request({query}).then((resp) => {
    if (resp.statusCode == 200) {
      if (resp.body.errorCode === '113') {
        console.log('请输入你要翻译的内容！'.red);
      } else {
        console.log('\n', `${resp.body.query}`[OUTPUTCOLOR], '\n');
        const { translation, basic } = resp.body || {};
        const { explains } = basic || {};
        if (explains && explains.length > 0) {
          for (let k in explains) {
            const value = explains[k];
            const outputLine = k === '0' ? `翻译：${value}` : `      ${value}`;
            console.log('\n', outputLine[OUTPUTCOLOR], '\n');
          }
        } else if (translation) {
          console.log('\n', `翻译：${translation}`[OUTPUTCOLOR], '\n');
        } else {
          console.log('\n', `暂无翻译`[OUTPUTCOLOR], '\n');
        }
      }
    }
  })
}

module.exports = translate;
