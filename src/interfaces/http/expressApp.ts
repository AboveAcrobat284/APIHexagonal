// src/interfaces/http/expressApp.ts
import express from 'express';
import { createUser, getUserById, getAllUsers, updateUser, deleteUserById } from '../../adapters/controllers/userController';

const app = express();
app.use(express.json());

app.post('/api/users', createUser); // Ruta correcta para crear un usuario
app.get('/api/users/:id', getUserById); // Ruta para obtener un usuario por ID
app.get('/api/users', getAllUsers); // Ruta para obtener todos los usuarios
app.put('/api/users/:id', updateUser); // Ruta para actualizar un usuario por ID
app.delete('/api/users/:id', deleteUserById); // Ruta para eliminar un usuario por ID

export default app;
