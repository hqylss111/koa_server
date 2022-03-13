const { USER_IS_PASSWORD_NOT_FILL_IN, USER_ALREADY_EXISTS } = require('../constants/error-type');
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
        default:
            status = 404;
            messgae = '错误信息未找到';
    };
    ctx.status = status;
    ctx.body = messgae;
};

module.exports = errorHandle;