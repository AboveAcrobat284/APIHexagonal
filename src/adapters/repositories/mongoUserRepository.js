// src/adapters/repositories/mongoUserRepository.js
const User = require('../../domain/models/user');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const UserModel = mongoose.model('User', userSchema);

class MongoUserRepository {
    async save(user) {
        const userModel = new UserModel(user);
        const savedUser = await userModel.save();
        return new User(savedUser._id, savedUser.name, savedUser.email, savedUser.password);
    }

    async findById(id) {
        const user = await UserModel.findById(id);
        if (!user) return null;
        return new User(user._id, user.name, user.email, user.password);
    }

    async findAll() {
        const users = await UserModel.find();
        return users.map(user => new User(user._id, user.name, user.email, user.password));
    }

    async update(user) {
        const updatedUser = await UserModel.findByIdAndUpdate(user.id, user, { new: true });
        return new User(updatedUser._id, updatedUser.name, updatedUser.email, updatedUser.password);
    }

    async deleteById(id) {
        await UserModel.findByIdAndDelete(id);
    }
}

module.exports = MongoUserRepository;
