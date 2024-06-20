// src/application/services/userService.ts
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import MongoUserRepository from '../../adapters/repositories/mongoUserRepository';
import MySQLUserRepository from '../../adapters/repositories/mysqlUserRepository';
import User from '../../domain/models/user';

const useMongoDB: boolean = process.env.USE_MONGODB === 'true';
const userRepository: IUserRepository = useMongoDB ? new MongoUserRepository() : new MySQLUserRepository();

export class UserService {
    async createUser(name: string, email: string, password: string): Promise<User> {
        const user = new User(null, name, email, password);
        return await userRepository.save(user);
    }

    async getUserById(id: string): Promise<User | null> {
        return await userRepository.findById(id);
    }

    async getAllUsers(): Promise<User[]> {
        return await userRepository.findAll();
    }

    async updateUser(id: string, name: string, email: string, password: string): Promise<User> {
        const user = new User(id, name, email, password);
        return await userRepository.update(user);
    }

    async deleteUserById(id: string): Promise<void> {
        return await userRepository.deleteById(id);
    }
}

export default new UserService();
