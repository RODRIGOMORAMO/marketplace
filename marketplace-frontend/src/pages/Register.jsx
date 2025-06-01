import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      id: Date.now(), // ID simulado
      nombre,
      email
    };

    login(nuevoUsuario); // Lo guarda en el Context
    navigate('/'); // Redirige al home
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">Registro de usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre completo:</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;

