const fs = require('fs');
const path = require('path');

const render1 = page =>
  new Promise((resolve, reject) => {
    // let viewUrl = `../../build/${page}`;
    const viewUrl = path.join(__dirname, `../../client/dist/${page}`);
    fs.readFile(viewUrl, 'binary', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
// const render = async (ctx, next) => {
//   console.log('render');
//   ctx.body = await render1('index.html');

//   // ctx.body = "hello word"
// };
const render = (ctx, next) => {
  return render1('index.html').then(function(data){
    ctx.body = data 
  })
};
module.exports = render;