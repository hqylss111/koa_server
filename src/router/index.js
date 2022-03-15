const fs = require('fs');

function useRouter (){
    // 遍历当前的文件夹 
    const routers = fs.readdirSync(__dirname);
    routers.forEach(file => {
        if (file === 'index.js') return;
        const router = require(`./${file}`);
        //当前的this 指向的是app 因为调用方是app实例
        this.use(router.routes());
        this.use(router.allowedMethods());
    });
};

module.exports = useRouter;