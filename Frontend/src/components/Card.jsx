import { Link } from "react-router-dom";
import axios from "axios";

const Card = ({ obra, usuario, setPublicaciones, onEliminar }) => {
  if (!obra || !obra.id) {
    return null; // No renderiza nada si la publicación es inválida
  }

  const handleEliminar = async () => {
    if (window.confirm("¿Seguro que deseas eliminar esta publicación?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/publicaciones/${obra.id}`, {
          headers: { Authorization: `Bearer ${usuario.token}` },
        });
        setPublicaciones((prev) => prev.filter((pub) => pub.id !== obra.id)); // Actualiza el estado
      } catch (error) {
        console.error("Error al eliminar la publicación:", error);
        alert("Ocurrió un error al intentar eliminar la publicación.");
      }
    }
  };

  return (
    <div className="card h-100 shadow-sm border-0" style={{ borderRadius: "15px" }}>
      <img
        src={obra.imagen_url}
        alt={obra.titulo}
        className="img-fluid rounded shadow"
      />
      <div className="card-body">
        <h5 className="card-title">{obra.titulo}</h5>
        <p className="card-text text-muted"><strong>Autor:</strong> {obra.autor}</p>
        <p className="card-text"><strong>Categoría:</strong> {obra.categoria}</p>
        <p className="card-text"><strong>Precio:</strong> ${obra.precio}</p>
        <Link to={`/detalle/${obra.id}#mensajes`}
          className={`badge mb-2 ${obra.cantidad_mensajes > 0 ? "bg-primary" : "bg-secondary"}`}
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          {obra.cantidad_mensajes} mensaje{obra.cantidad_mensajes !== 1 ? "s" : ""}
        </Link>
        <Link to={`/detalle/${obra.id}`} className="btn btn-outline-dark w-100">
          Ver Detalle
        </Link>
        {usuario && usuario.id === obra.usuario_id && (
          null // Oculta los botones "Editar" y "Eliminar"
        )}
      </div>
    </div>
  );
};

export default Card;
