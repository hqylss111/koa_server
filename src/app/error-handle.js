const { USER_IS_PASSWORD_NOT_FILL_IN, USER_ALREADY_EXISTS,USER_PASSWORD_ERROR,USER_DOES_NOT_EXIST } = require('../constants/error-type');
const errorHandle = (err, ctx) => {
    let status, messgae;
    switch (err.message) {
        case USER_IS_PASSWORD_NOT_FILL_IN:
            status = 400;
            messgae = USER_IS_PASSWORD_NOT_FILL_IN;
            break;
        case USER_ALREADY_EXISTS:
            status = 200;
            messgae = USER_ALREADY_EXISTS;
            break;
        case USER_PASSWORD_ERROR:
            status = 400;
            messgae = '密码输入输入错误';
            break;
        case USER_DOES_NOT_EXIST:
            status = 400;
            messgae = '用户不存在';
            break;
        default:
            status = 404;
            messgae = '错误信息未找到';
    };
    
    ctx.status = status;
    ctx.body = messgae;
};

module.exports = errorHandle;