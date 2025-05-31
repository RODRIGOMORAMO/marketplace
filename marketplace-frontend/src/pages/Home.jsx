import { Link } from "react-router-dom";
import Card from '../components/Card';

function Home() {
  const publicaciones = [
    {
      id: 1,
      titulo: 'PlayStation 4',
      descripcion: 'Con dos controles y juegos.',
      precio: 180000,
      imagen: 'https://via.placeholder.com/300x200.png?text=PlayStation+4'
    },
    {
      id: 2,
      titulo: 'Bicicleta montaña',
      descripcion: 'Ideal para todo terreno.',
      precio: 95000,
      imagen: 'https://via.placeholder.com/300x200.png?text=Bicicleta'
    },
    {
      id: 3,
      titulo: 'Silla ergonómica',
      descripcion: 'Perfecta para escritorio.',
      precio: 45000,
      imagen: 'https://via.placeholder.com/300x200.png?text=Silla'
    }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Marketplace</h1>
      <p className="lead">Bienvenido a la plataforma de compra y venta local.</p>

      <div className="mt-4 mb-5">
        <Link to="/login" className="btn btn-outline-primary me-2">Iniciar sesión</Link>
        <Link to="/registro" className="btn btn-primary">Registrarse</Link>
      </div>

      <h2 className="text-secondary mb-4">Publicaciones recientes</h2>
      <div className="row">
        {publicaciones.map(pub => (
          <Card key={pub.id} {...pub} />
        ))}
      </div>
    </div>
  );
}

export default Home;


