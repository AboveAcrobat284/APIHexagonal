// src/infrastructure/diContainer.ts
import { IUserRepository } from '../domain/repositories/IUserRepository';
import MongoUserRepository from '../adapters/repositories/mongoUserRepository';
import MySQLUserRepository from '../adapters/repositories/mysqlUserRepository';
import { UserService } from '../application/services/userService';
import connectMongoDB from './database/mongoConnection';
import connectMySQL from './database/mysqlConnection';

const useMongoDB: boolean = process.env.USE_MONGODB === 'true';

let userRepository: IUserRepository;

if (useMongoDB) {
    connectMongoDB();
    userRepository = new MongoUserRepository();
} else {
    connectMySQL();
    userRepository = new MySQLUserRepository();
}

const userService = new UserService(userRepository);

export { userService };
