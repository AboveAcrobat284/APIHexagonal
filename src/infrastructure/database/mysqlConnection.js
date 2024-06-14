// src/infrastructure/database/mysqlConnection.js
const mysql = require('mysql2/promise');

const connectMySQL = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        console.log("Connected to MySQL database");
        return connection;
    } catch (error) {
        console.error("Error connecting to MySQL:", error);
        process.exit(1);
    }
};

module.exports = connectMySQL;
