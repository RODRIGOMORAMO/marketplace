
import { useParams, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom'; // necesario para el botón de login




const publicacionesSimuladas = [
  {
    id: 1,
    titulo: 'PlayStation 4',
    descripcion: 'Con dos controles y juegos. Excelente estado. Ideal para quienes buscan una experiencia de juego fluida.',
    precio: 180000,
    imagen: 'https://via.placeholder.com/600x300.png?text=PlayStation+4',
    categoria: 'Consolas y videojuegos',
    ubicacion: 'Santiago, RM',
    vendedor: 'Carlos Díaz',
    fecha: '2025-05-21',
    estado: 'Usado'
  },
  {
    id: 2,
    titulo: 'Bicicleta montaña',
    descripcion: 'Frenos de disco hidráulicos. Incluye casco y luz trasera.',
    precio: 95000,
    imagen: 'https://via.placeholder.com/600x300.png?text=Bicicleta',
    categoria: 'Deportes',
    ubicacion: 'Valparaíso',
    vendedor: 'Laura Pérez',
    fecha: '2025-05-19',
    estado: 'Usado'
  },
  {
    id: 3,
    titulo: 'Silla ergonómica',
    descripcion: 'Diseñada para oficina o escritorio. Apoyo lumbar y asiento acolchado.',
    precio: 45000,
    imagen: 'https://via.placeholder.com/600x300.png?text=Silla',
    categoria: 'Muebles',
    ubicacion: 'Concepción',
    vendedor: 'Ignacio Herrera',
    fecha: '2025-05-18',
    estado: 'Nuevo'
  },
  {
    id: 4,
    titulo: 'Notebook Lenovo',
    descripcion: 'Laptop ideal para estudio o trabajo remoto. Viene con Windows 11 instalado.',
    precio: 320000,
    imagen: 'https://via.placeholder.com/600x300.png?text=Notebook+Lenovo',
    categoria: 'Tecnología',
    ubicacion: 'Rancagua',
    vendedor: 'Camila Rodríguez',
    fecha: '2025-05-17',
    estado: 'Usado'
  },
  {
    id: 5,
    titulo: 'Mesa de comedor',
    descripcion: 'Madera sólida. Incluye 6 sillas. Perfecta para el hogar.',
    precio: 150000,
    imagen: 'https://via.placeholder.com/600x300.png?text=Mesa+de+comedor',
    categoria: 'Hogar',
    ubicacion: 'Temuco',
    vendedor: 'Pedro González',
    fecha: '2025-05-16',
    estado: 'Usado'
  },
  {
    id: 6,
    titulo: 'Audífonos inalámbricos',
    descripcion: 'Bluetooth 5.0, estuche cargador, excelente sonido.',
    precio: 25000,
    imagen: 'https://via.placeholder.com/600x300.png?text=Aud%C3%ADfonos',
    categoria: 'Electrónica',
    ubicacion: 'La Serena',
    vendedor: 'Sofía Muñoz',
    fecha: '2025-05-15',
    estado: 'Nuevo'
  }
];



function Detalle() {
  const { id } = useParams();
  const location = useLocation(); // 👈 necesario para saber desde dónde vino el usuario
  const publicacion = publicacionesSimuladas.find(p => p.id === parseInt(id));
  const { usuario } = useAuth();
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  if (!publicacion) {
    return <h2 className="text-danger">Publicación no encontrada</h2>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mensaje.trim() !== '') {
      console.log(`Mensaje enviado al vendedor: ${mensaje}`);
      setEnviado(true);
      setMensaje('');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">{publicacion.titulo}</h2>
      <img
        src={publicacion.imagen}
        alt={publicacion.titulo}
        className="img-fluid mb-4"
        style={{ maxHeight: '300px', objectFit: 'cover' }}
      />

      <div className="mb-3">
        <p><strong>Categoría:</strong> {publicacion.categoria}</p>
        <p><strong>Ubicación:</strong> {publicacion.ubicacion}</p>
        <p><strong>Publicado por:</strong> {publicacion.vendedor}</p>
        <p><strong>Fecha de publicación:</strong> {publicacion.fecha}</p>
        <p><strong>Estado del producto:</strong> {publicacion.estado}</p>
      </div>

      <p className="lead">{publicacion.descripcion}</p>
      <h4 className="text-success">Precio: ${publicacion.precio}</h4>

      <hr />

      <h5 className="mt-4">Enviar mensaje al vendedor</h5>

      {usuario ? (
        <>
          <form onSubmit={handleSubmit}>
            <textarea
              className="form-control mb-2"
              rows="3"
              placeholder="Escribe tu consulta aquí..."
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
            <button type="submit" className="btn btn-outline-primary">Enviar</button>
          </form>

          {enviado && (
            <div className="alert alert-success mt-3">
              ¡Tu mensaje ha sido enviado al vendedor!
            </div>
          )}
        </>
      ) : (
        <div className="alert alert-warning">
          Debes{' '}
          <Link
            to={`/login?redirect=${encodeURIComponent(location.pathname)}`}
            className="alert-link"
          >
            iniciar sesión
          </Link>{' '}
          para contactar al vendedor.
        </div>
      )}
    </div>
  );
}

export default Detalle;


