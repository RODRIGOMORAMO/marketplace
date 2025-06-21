// Define los endpoints
import { Router } from 'express';
import { registrarUsuario, loginUsuario } from '../controllers/usuariosController.js';

const router = Router();

// Ruta para registrar un nuevo usuario
router.post('/usuarios', registrarUsuario);

// Ruta para iniciar sesión
router.post('/login', loginUsuario);

// Ruta para cerrar sesión (logout)
router.post('/logout', (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Lax',
  });
  res.json({ message: "Sesión cerrada" });
});

export default router;