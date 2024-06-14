// src/application/services/userService.js
const MongoUserRepository = require('../../adapters/repositories/mongoUserRepository');
const MySQLUserRepository = require('../../adapters/repositories/mysqlUserRepository');
const User = require('../../domain/models/user');

// Seleccionar el repositorio adecuado basado en la variable de entorno
const useMongoDB = process.env.USE_MONGODB === 'true';
const userRepository = useMongoDB ? new MongoUserRepository() : new MySQLUserRepository();

class UserService {
    async createUser(name, email, password) {
        const user = new User(null, name, email, password);
        return await userRepository.save(user);
    }

    async getUserById(id) {
        return await userRepository.findById(id);
    }

    async getAllUsers() {
        return await userRepository.findAll();
    }

    async updateUser(id, name, email, password) {
        const user = new User(id, name, email, password);
        return await userRepository.update(user);
    }

    async deleteUserById(id) {
        return await userRepository.deleteById(id);
    }
}

module.exports = new UserService();
