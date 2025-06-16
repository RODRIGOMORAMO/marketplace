import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PublicacionesContext = createContext();

const PublicacionesProvider = ({ children }) => {
  const [publicaciones, setPublicaciones] = useState([]);

  // Cargar publicaciones desde el backend al iniciar
  useEffect(() => {
    const obtenerPublicaciones = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/publicaciones`);
        setPublicaciones(res.data);
      } catch (error) {
        console.error("Error al obtener publicaciones desde API:", error);
      }
    };

    obtenerPublicaciones();
  }, []);

  // Agregar una nueva publicación enviándola al backend
  const agregarPublicacion = async (nuevaPublicacion, token) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/publicaciones`,
        nuevaPublicacion,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const nueva = res.data; // Asegúrate de que el backend devuelve la publicación creada
      setPublicaciones((prev) => [nueva, ...prev]); // Agrega la nueva publicación al estado global
      return nueva;
    } catch (error) {
      console.error("Error al agregar publicación:", error);
      throw error;
    }
  };

  return (
    <PublicacionesContext.Provider value={{ publicaciones, setPublicaciones, agregarPublicacion }}>
      {children}
    </PublicacionesContext.Provider>
  );
};

export default PublicacionesProvider;


