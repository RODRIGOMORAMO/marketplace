import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import CrearPublicacion from "./pages/CrearPublicacion";
import Detalle from "./pages/Detalle";
import Perfil from "./pages/Perfil";
import Editar from "./pages/Editar"; // Importa el componente Editar
import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  });

  return (
    // 🟢 Requerimiento 2: Uso de React Router
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <main className="container py-4 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/crear" element={<CrearPublicacion />} />
            <Route path="/detalle/:id" element={<Detalle />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/editar/:id" element={<Editar />} /> {/* Agrega esta línea */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

