const userService = require('../service/user.service');


class UserController {

    async create(ctx, next) {
        const user = ctx.request.body;

        const result = await userService.create(user);

        ctx.body = result;
    };


    async userLogin(ctx,body){
        
        ctx.body = '登录成功';
    }

}

module.exports = new UserController();