import { useAuth } from '../context/AuthContext';

function Perfil() {
  const { usuario } = useAuth();

  return (
    <div className="container mt-5">
      <h2 className="text-primary">Mi perfil</h2>
      <p><strong>Nombre:</strong> {usuario.nombre}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>ID:</strong> {usuario.id}</p>
    </div>
  );
}

export default Perfil;
