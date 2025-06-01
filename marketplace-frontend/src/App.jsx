import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Detalle from './pages/Detalle';
import Navbar from './components/Navbar';
import Perfil from './pages/Perfil';
import RutaPrivada from './routes/RutaPrivada';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="/perfil" element={<RutaPrivada><Perfil /></RutaPrivada>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

