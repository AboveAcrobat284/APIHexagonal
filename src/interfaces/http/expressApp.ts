// src/interfaces/http/expressApp.ts
import express from 'express';
import { createUser, getUserById, getAllUsers, updateUser, deleteUserById } from '../../adapters/controllers/userController';

const app = express();
app.use(express.json());

app.post('/api/users', createUser);
app.get('/api/users/:id', getUserById);
app.get('/api/users', getAllUsers);
app.put('/api/users/:id', updateUser);
app.delete('/api/users/:id', deleteUserById);

export default app;
