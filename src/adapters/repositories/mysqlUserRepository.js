// src/adapters/repositories/mysqlUserRepository.js
const User = require('../../domain/models/user');
const connectMySQL = require('../../infrastructure/database/mysqlConnection');

class MySQLUserRepository {
    async save(user) {
        const connection = await connectMySQL();
        const [result] = await connection.execute(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [user.name, user.email, user.password]
        );
        user.id = result.insertId;
        return user;
    }

    async findById(id) {
        const connection = await connectMySQL();
        const [rows] = await connection.execute(
            'SELECT * FROM users WHERE id = ?',
            [id]
        );
        if (rows.length === 0) return null;
        const user = rows[0];
        return new User(user.id, user.name, user.email, user.password);
    }

    async findAll() {
        const connection = await connectMySQL();
        const [rows] = await connection.execute('SELECT * FROM users');
        return rows.map(user => new User(user.id, user.name, user.email, user.password));
    }

    async update(user) {
        const connection = await connectMySQL();
        await connection.execute(
            'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
            [user.name, user.email, user.password, user.id]
        );
        return user;
    }

    async deleteById(id) {
        const connection = await connectMySQL();
        await connection.execute('DELETE FROM users WHERE id = ?', [id]);
    }
}

module.exports = MySQLUserRepository;
