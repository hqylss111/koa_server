
const userModal = require('../modal/user.modal');

class UserService {
    async create(user) {
        const { name, password } = user;
        console.log(user,'2222')
        try {
            return await userModal.creteUser(name, password);
        } catch (error) {
            console.log(error)
            return '失败';
        }
    };
}

module.exports = new UserService();