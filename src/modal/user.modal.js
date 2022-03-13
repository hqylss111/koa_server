const sd = require('silly-datetime');

const MysqlConnections = require('./index');
class UserModal extends MysqlConnections {
    /**
     * 查询用户名称
     * @param {*} name 用户名字 
     * @returns 用户信息
     */
    async queryUser(name) {
        const sql = 'SELECT * FROM users WHERE name = ?';
        const result = await this.connections.execute(sql, [name]);
        return result[0];
    };

    async creteUser(name, password) {
        const currnetTime = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
        const CTEARE_SQL = 'INSERT INTO users (name,password,createAt) VALUES(?,?,?)';
        const result = await this.connections.execute(CTEARE_SQL, [name, password, currnetTime]); 
        return result;
    }
};

module.exports = new UserModal();