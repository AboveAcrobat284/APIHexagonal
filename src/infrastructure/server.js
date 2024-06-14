// src/infrastructure/server.js
const dotenv = require('dotenv');
dotenv.config();

const app = require('../interfaces/http/expressApp.js');
const useMongoDB = process.env.USE_MONGODB === 'true';

if (useMongoDB) {
    console.log("Using MongoDB database");
    const connectMongoDB = require('./database/mongoConnection');
    connectMongoDB();
} else {
    console.log("Using MySQL database");
    const connectMySQL = require('./database/mysqlConnection');
    connectMySQL();
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server online on port ${PORT}`);
});
