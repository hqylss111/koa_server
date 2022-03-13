const Router = require('koa-router');

const UserController = require('../controller/user.controller');

const user_Router = new Router({ prefix: '/users' });

const { vierfyUser } = require('../middleware/user.middleware');

user_Router.post('/', vierfyUser, UserController.create);

module.exports = user_Router;

