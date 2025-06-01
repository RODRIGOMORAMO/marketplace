import { useAuth } from '../context/AuthContext';

function Perfil() {
  const { usuario, publicaciones } = useAuth();

  if (!usuario) {
    return <div className="container mt-4"><p>No has iniciado sesión.</p></div>;
  }

  const publicacionesUsuario = publicaciones.filter(p => p.usuarioId === usuario.id);

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-3">Mis Datos</h2>
      <ul className="list-group mb-5">
        <li className="list-group-item"><strong>Nombre:</strong> {usuario.nombre}</li>
        <li className="list-group-item"><strong>Email:</strong> {usuario.email}</li>
        {/* Agrega otros campos si tu usuario tiene más información */}
      </ul>

      <h2 className="text-primary mb-3">Mis Publicaciones</h2>
      {publicacionesUsuario.length === 0 ? (
        <p>No has publicado ningún producto.</p>
      ) : (
        <div className="row">
          {publicacionesUsuario.map(p => (
            <div className="col-md-6 col-lg-4 mb-4" key={p.id}>
              <div className="card h-100">
                <img
                  src={p.imagen}
                  alt={p.titulo}
                  className="card-img-top"
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.titulo}</h5>
                  <p className="card-text"><strong>Precio:</strong> ${p.precio}</p>
                  <p className="card-text"><strong>Categoría:</strong> {p.categoria}</p>
                  <p className="card-text"><strong>Estado:</strong> {p.estado}</p>
                  <p className="card-text"><strong>Ubicación:</strong> {p.ubicacion}</p>
                  <p className="card-text"><strong>Fecha:</strong> {p.fecha}</p>
                  <p className="card-text"><strong>DESCRIPCION</strong> <br/>{p.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Perfil;


