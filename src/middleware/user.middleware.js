const { USER_IS_PASSWORD_NOT_FILL_IN, USER_ALREADY_EXISTS } = require('../constants/error-type');
const userModal = require('../modal/user.modal');
/**
 * 用户登录中间件
 */
const vierfyUser = async (ctx, next) => {
    const { name, password } = ctx.request.body;

    if (!name || !password) {
        const error = new Error(USER_IS_PASSWORD_NOT_FILL_IN);
        // 时间名称 error ctx
        return await ctx.app.emit('error', error, ctx);
    };

    const usetExists = await userModal.queryUser(name);
    if(usetExists.length > 0 ){
        const error = new Error(USER_ALREADY_EXISTS);
        return await ctx.app.emit('error', error, ctx);
    };

    await next();
}

module.exports = {
    vierfyUser
};