// src/routes/authRoutes.js
import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();
let users = [{ name: 'Juan' }, { name: 'Maria' }];

// Rutas para registrarse e iniciar sesión
router.post('/register', register);
router.post('/login', login);


router.get('/users', (req, res) => {
const users = [{ name: 'Juan' }, { name: 'Maria' }]
res.send(users)
})


router.post('/users', (req, res) => {
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const user = req.body.name
users.push({ name: capitalize(user) })
console.log(users)
res.status(201).send('Usuario agregado correctamente')
})


router.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});
export default router;
