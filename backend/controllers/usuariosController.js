// Recibe la solicitud y llama al modelo. lógica que se usará en las rutas para registrar y loguear usuarios.
import bcrypt from 'bcrypt';
import { crearUsuario, buscarUsuarioPorEmail } from "../models/usuariosModel.js";
const jwt = require("jsonwebtoken");

const generarToken = (usuario) => {
  return jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

export const registrarUsuario = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        if (!nombre || !email || !password) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }
        // Verificar si el usuario ya existe
        const usuarioExiste = await buscarUsuarioPorEmail(email);
        if (usuarioExiste) {
            return res.status(400).json({ error: 'El usuario ya existe' });
        }
        // Encriptar la contraseña
        const passwordHasheada = await bcrypt.hash(password, 10);

        // Crear el nuevo usuario   
        const nuevoUsuario = await crearUsuario({
            nombre,
            email,
            password: passwordHasheada
        });
        
        res.status(201).json({ message: 'Usuario registrado exitosamente', usuario: nuevoUsuario });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al registrar el usuario' });
    }
}

export const loginUsuario = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const usuario = await buscarUsuarioPorEmail(email);
    if (!usuario) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Aquí cambia usuario.password
    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) {
        return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    const token = generarToken(usuario);

    res.status(200).json({
        message: 'Usuario autenticado exitosamente',
        token,
        usuario: {
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email
        }
    });
}