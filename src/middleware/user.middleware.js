const { USER_IS_PASSWORD_NOT_FILL_IN, USER_ALREADY_EXISTS,USER_DOES_NOT_EXIST,USER_PASSWORD_ERROR } = require('../constants/error-type');
const userModal = require('../modal/user.modal');
const { md5Pssword } = require('../utils/password-handle')
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
    if (usetExists.length > 0) {
        const error = new Error(USER_ALREADY_EXISTS);
        return await ctx.app.emit('error', error, ctx);
    };

    await next();
}



/**
 *  登录的中间建
 */

const vierfyLogin = async (ctx,next) => {
    const { name, password } = ctx.request.body;

    if (!name || !password) {
        const error = new Error(USER_IS_PASSWORD_NOT_FILL_IN);
        // 时间名称 error ctx
        return await ctx.app.emit('error', error, ctx);
    };


    const usetExists = await userModal.queryUser(name);
    const user = usetExists[0];
    if(!user){
        const error = new Error(USER_DOES_NOT_EXIST);
        // 时间名称 error ctx
        return await ctx.app.emit('error', error, ctx);
    };

    if(user.password !== md5Pssword(password)){
        const error = new Error(USER_PASSWORD_ERROR);
        // 时间名称 error ctx
        return await ctx.app.emit('error', error, ctx);
    }
    next();
}





/**
 * 进密码进行加密
 */
const handlePassword = async (ctx, next) => {
    const { password } = ctx.request.body;
    ctx.request.body.password = md5Pssword(password);
    await next();
}

module.exports = {
    vierfyUser,
    handlePassword,
    vierfyLogin
};