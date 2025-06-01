import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function RutaPrivada({ children }) {
  const { usuario } = useAuth();

  // Si no está autenticado, redirige al login
  if (!usuario) {
    return <Navigate to="/login" />;
  }

  // Si está logueado, permite acceso
  return children;
}

export default RutaPrivada;
