const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
// const react = require('koa-react-view');
const index = require('./routes/index');
const api = require('./routes/api');
const debug = require('debug')('demo:server');
const http = require('http');
const staticCache = require('koa-static-cache');

const app = new Koa();
console.log('???xx');
// error handler
onerror(app);
// middlewares
// app.use(
//   bodyparser({
//     enableTypes: ['json', 'form', 'text'],
//   })
// );
app.use(json());
app.use(logger());
// routes
app.use(require('koa-static')(`${__dirname}../client/dist`));
app.use(
  staticCache(path.resolve(__dirname, '../client/dist'), {
    maxAge: 365 * 24 * 60 * 60,
    gzip: true,
  })
);
app.use(api.routes(), api.allowedMethods());
app.use(index.routes(), index.allowedMethods());
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT0 || '3009';
// app.set('port', port);

app.listen(port, () => {
  console.log(`listen on:${port}`);
});
