import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  // Usamos useLocation para leer parámetros de URL
  const location = useLocation();

  // Extraemos el parámetro redirect si existe, o '/' como fallback
  const params = new URLSearchParams(location.search);
  const redirectPath = params.get('redirect') || '/';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de autenticación con nombre incluido
    const usuarioSimulado = {
      id: 12,
      nombre,
      email
    };

    login(usuarioSimulado);

    // Redirigir a la ruta pasada en redirectPath
    navigate(redirectPath);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre:</label>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary">Entrar</button>
      </form>
    </div>
  );
}

export default Login;

