// src/infrastructure/server.ts
import dotenv from 'dotenv';
dotenv.config();

import app from '../interfaces/http/expressApp';
const useMongoDB: boolean = process.env.USE_MONGODB === 'true';

if (useMongoDB) {
    console.log("Using MongoDB database");
    import('./database/mongoConnection').then(connectMongoDB => {
        connectMongoDB.default();
    });
} else {
    console.log("Using MySQL database");
    import('./database/mysqlConnection').then(connectMySQL => {
        connectMySQL.default();
    });
}

const PORT: number = parseInt(process.env.PORT || '3000', 10);

app.listen(PORT, () => {
    console.log(`Server online on port ${PORT}`);
});
