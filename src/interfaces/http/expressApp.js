// src/interfaces/http/expressApp.js
const express = require('express');
const userController = require('../../adapters/controllers/userController');

const app = express();
app.use(express.json());

app.post('/api/users', userController.createUser);
app.get('/api/users/:id', userController.getUserById);
app.get('/api/users', userController.getAllUsers);
app.put('/api/users/:id', userController.updateUser);  // Añadido método PUT
app.delete('/api/users/:id', userController.deleteUserById);

module.exports = app;
