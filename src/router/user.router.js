const Router = require('koa-router');

const UserController = require('../controller/user.controller');
const { vierfyUser, handlePassword, vierfyLogin } = require('../middleware/user.middleware');

const user_Router = new Router({ prefix: '/users' });


/**
 * 创建用户
 */
user_Router.post('/', vierfyUser, handlePassword, UserController.create);

/**
 * 登录
 */
user_Router.post('/login', vierfyLogin, UserController.userLogin);


module.exports = user_Router;

