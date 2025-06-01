import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Publicar() {
  const { usuario, agregarPublicacion } = useAuth();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usuario) {
      alert("Debes iniciar sesión para publicar.");
      return;
    }

    const nuevaPublicacion = {
      id: Date.now(),
      usuarioId: usuario.id,
      titulo,
      descripcion,
      precio,
      categoria,
      imagen: imagen || "https://via.placeholder.com/300x200.png?text=Producto", // imagen por defecto
      vendedor: usuario.nombre,
      ubicacion: "Chile",
      estado: "Nuevo",
      fecha: new Date().toLocaleDateString(),
    };

    agregarPublicacion(nuevaPublicacion);
    navigate("/perfil");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Publicar nuevo producto</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Categoría</label>
          <input
            type="text"
            className="form-control"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">URL de la imagen</label>
          <input
            type="text"
            className="form-control"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Publicar</button>
      </form>
    </div>
  );
}

export default Publicar;


