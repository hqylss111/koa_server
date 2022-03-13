const mysql2 = require('mysql2');
const { MYSQL_HOST, MYSQL_RORT, MYSQL_DATEBASE, MYSQL_USER, MYSQL_PASSWORD } = require('../config/index');
const connections = mysql2.createConnection({
    host: MYSQL_HOST,
    database: MYSQL_DATEBASE,
    password: MYSQL_PASSWORD,
    user: MYSQL_USER,
    port: MYSQL_RORT,
});
//返回的是promise

class MysqlConnections {
    constructor() {
        this.connections = connections.promise();
    };
}

module.exports =  MysqlConnections;