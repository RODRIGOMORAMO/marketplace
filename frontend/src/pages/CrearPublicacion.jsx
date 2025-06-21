import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { PublicacionesContext } from "../context/PublicacionesContext";
import axios from "axios";

const categorias = [
  { id: 1, nombre: "Artes visuales" },
  { id: 2, nombre: "Artes plásticas" },
  { id: 3, nombre: "Servicios" }
];

const CrearPublicacion = () => {
  const { usuario } = useContext(UserContext);
  const { setPublicaciones } = useContext(PublicacionesContext);
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoriaId, setCategoriaId] = useState(1);
  const [imagen, setImagen] = useState("");
  const [precio, setPrecio] = useState("");
  const [error, setError] = useState("");

  if (!usuario) {
    navigate("/login");
    return null;
  }

  const manejarSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const token = localStorage.getItem("token");

      const nuevaPublicacion = {
        titulo,
        descripcion,
        categoria_id: categoriaId,
        imagen_url: imagen,
        precio: Number(precio),
      };

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/publicaciones`,
        nuevaPublicacion,
        { withCredentials: true }
      );

      setPublicaciones((prev) => [res.data, ...prev]);
      alert("¡Publicación creada!");
      setTitulo("");
      setDescripcion("");
      setCategoriaId(1);
      setImagen("");
      setPrecio("");
      navigate("/");
    } catch (err) {
      setError("Error al crear la publicación");
    }
  };

  const manejarEdicion = async (e) => {
    e.preventDefault();
    setEstado("");
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/publicaciones/${id}`,
        publicacion,
        { withCredentials: true }
      );
      setPublicaciones((prev) =>
        prev.map((pub) => (pub.id === res.data.id ? res.data : pub))
      );
      setEstado("Publicación actualizada correctamente.");
      navigate(`/detalle/${id}`);
    } catch (error) {
      setEstado("Error al editar la publicación.");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="mb-4">Crear Nueva Publicación</h2>
        <form onSubmit={manejarSubmit}>
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
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Categoría</label>
            <select
              className="form-select"
              value={categoriaId}
              onChange={(e) => setCategoriaId(Number(e.target.value))}
              required
            >
              {categorias.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Imagen (URL)</label>
            <input
              type="text"
              className="form-control"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              required
            />
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
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-dark w-100">
            Publicar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrearPublicacion;
