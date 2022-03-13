const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    APP_PORT,
    MYSQL_HOST,
    MYSQL_RORT,
    MYSQL_DATEBASE,
    MYSQL_USER,
    MYSQL_PASSWORD
} = process.env;