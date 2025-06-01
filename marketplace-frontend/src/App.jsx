import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Detalle from './pages/Detalle';
import Navbar from './components/Navbar';
import Perfil from './pages/Perfil';
import Publicar from './pages/Publicar';
import RutaPrivada from './routes/RutaPrivada';
import Footer from './components/Footer';

function App() {
  const [publicaciones, setPublicaciones] = useState([]);

  const agregarPublicacion = (nueva) => {
    setPublicaciones([...publicaciones, nueva]);
  };

  return (
    <BrowserRouter basename="/marketplace">
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <main className="container flex-grow-1 mt-4">
          <Routes>
            <Route path="/" element={<Home publicaciones={publicaciones} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/detalle/:id" element={<Detalle publicaciones={publicaciones} />} />
            <Route
              path="/perfil"
              element={
                <RutaPrivada>
                  <Perfil publicaciones={publicaciones} />
                </RutaPrivada>
              }
            />
            <Route
              path="/publicar"
              element={
                <RutaPrivada>
                  <Publicar agregarPublicacion={agregarPublicacion} />
                </RutaPrivada>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


