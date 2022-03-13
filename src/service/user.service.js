
const userModal = require('../modal/user.modal');

class UserService {
    async create(user) {
        const { name, password } = user;
        try {
            return await userModal.creteUser(name, password);
        } catch (error) {
            return '失败';
        }
    };
}

module.exports = new UserService();