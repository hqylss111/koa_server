const crypto = require('crypto');


const md5Pssword = (password) => {
    const hash = crypto.createHash('md5');
    // 只能更新string !!!!
    const reuslt =  hash.update(`${password}`).digest('hex');
    return reuslt;
}

module.exports = {
    md5Pssword
}

