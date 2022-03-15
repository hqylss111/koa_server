const koa = require('koa');
const koaBodyparser = require('koa-bodyparser');

const errorHandle = require('./error-handle');
const useRouters = require('../router');
const app = new koa();
app.useRouters = useRouters;

// 解析json
app.use(koaBodyparser());
app.useRouters();
app.on('error',errorHandle);
module.exports = app;