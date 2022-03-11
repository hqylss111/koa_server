
const app = require('./app');
const { APP_PORT } = require('./config');

app.listen(APP_PORT, () => {
    console.log('服务器启动成功 端口:' + APP_PORT);
});

/**
 * 入口的文件 应该越整洁越好
 */