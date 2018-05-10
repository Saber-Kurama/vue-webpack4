const router = require('koa-router')();
const proxy = require('http-proxy-middleware');
const c2k = require('koa2-connect');

router.prefix('/api');

router.post(
  '/*',
  // function (ctx, next) {
  //     // http://fan-card-web.fincard.beta/api/credit/list
  //   ctx.body = 'this is a users response!'
  // }
  c2k(
    proxy({
      // target: 'http://fan-card-web.fincard.beta',
      target: 'http://10.10.232.93:8091',
      changeOrigin: true,
      // pathRewrite:{
      // '^/api/*':'^/internal/*'
      // },
      logLevel: 'debug',
    })
  )
);

router.get('/bar', function(ctx, next) {
  console.log('???xx');
  ctx.body = 'this is a users/bar response1';
});

module.exports = router;
