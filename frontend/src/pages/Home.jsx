import { useState, useContext } from "react";
import { PublicacionesContext } from "../context/PublicacionesContext";
import { UserContext } from "../context/UserContext";
import Card from "../components/Card";

const categorias = ["todas", "Artes visuales", "Artes plásticas", "Servicios"];

const Home = () => {
  const { publicaciones, setPublicaciones } = useContext(PublicacionesContext);
  const { usuario } = useContext(UserContext);
  const [filtro, setFiltro] = useState("todas");

  const publicacionesArray = Array.isArray(publicaciones) ? publicaciones : [];

  const publicacionesFiltradas =
    filtro === "todas"
      ? publicacionesArray
      : publicacionesArray.filter(
          (obra) =>
            obra.categoria &&
            obra.categoria.toLowerCase().trim() === filtro.toLowerCase().trim()
        );

  return (
    <div>
      <div className="text-center py-4">
        <h1 className="display-5 fw-bold">Bienvenid@ a Galería Creativa XXXXX</h1>
        <p className="lead">Descubre, comparte y vende arte hecho con pasión.</p>
        <h1 className="text-center my-4">Explora Obras y Servicios Creativos</h1>
      </div>

      <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`btn ${filtro === cat ? "btn-dark" : "btn-outline-dark"}`}
            style={{ borderRadius: "20px", padding: "6px 16px" }}
            onClick={() => setFiltro(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="row">
        {publicacionesFiltradas.length === 0 ? (
          <div className="col-12 text-center text-muted">
            No hay publicaciones para mostrar.
          </div>
        ) : (
          publicacionesFiltradas
            .filter((obra) => obra && obra.id) // Filtra elementos válidos
            .map((obra) => (
              <div className="col-md-4 mb-4" key={obra.id}>
                <Card
                  obra={obra}
                  usuario={usuario}
                  setPublicaciones={setPublicaciones}
                />
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Home;
