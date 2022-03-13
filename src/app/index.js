const koa = require('koa');
const koaBodyparser = require('koa-bodyparser');

const userRouter = require('../router/user.router')
const errorHandle = require('./error-handle');
const app = new koa();
// 解析json
app.use(koaBodyparser());

 // 判断用户是否登录过期


 
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.on('error',errorHandle);
module.exports = app;