import { useContext, useState, useRef, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { usuario, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const [menuAbierto, setMenuAbierto] = useState(false);
  const contenidoRef = useRef(null); // Ref para medir altura

  const cerrarSesion = () => {
    logout();
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  // Estado para controlar la altura dinámica del collapse
  const [altura, setAltura] = useState("0px");

  // Cuando cambia menuAbierto, ajustamos la altura para la transición
  useEffect(() => {
    if (menuAbierto) {
      // Abrir: altura del contenido real
      setAltura(contenidoRef.current.scrollHeight + "px");
    } else {
      // Cerrar: altura 0 para colapsar
      setAltura("0px");
    }
  }, [menuAbierto]);

  // También resetear altura a 'auto' después de la transición para que se adapte si cambia contenido
  const manejarTransitionEnd = () => {
    if (menuAbierto) {
      setAltura("auto");
    }
  };

  return (
    <>
      <style>
  {`
    @media (max-width: 991.98px) {
      #navbarNav {
        width: auto !important;
        margin-left: auto;
        overflow: hidden;
        transition: height 350ms ease;
        height: ${altura};
      }
      #navbarNav .navbar-nav {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        text-align: right;
      }
      #navbarNav .nav-link, #navbarNav button {
        width: 100%;
        text-align: right;
      }
    }
  `}
</style>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            🎨 Galería Creativa
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={menuAbierto}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            id="navbarNav"
            ref={contenidoRef}
            onTransitionEnd={manejarTransitionEnd}
            className={`navbar-collapse`}
            style={{ height: altura }}
          >
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => setMenuAbierto(false)}
                >
                  Inicio
                </Link>
              </li>

              {usuario ? (
                <>
                  <li className="nav-item">
                    <span className="nav-link">
                      👋 Hola, <strong>{usuario.nombre}</strong>
                    </span>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/perfil"
                      onClick={() => setMenuAbierto(false)}
                    >
                      Mi perfil
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/crear"
                      onClick={() => setMenuAbierto(false)}
                    >
                      Publicar
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-sm btn-light"
                      onClick={() => {
                        cerrarSesion();
                        setMenuAbierto(false);
                      }}
                    >
                      Cerrar sesión
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/login"
                      onClick={() => setMenuAbierto(false)}
                    >
                      Acceso
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/registro"
                      onClick={() => setMenuAbierto(false)}
                    >
                      Registro
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;




