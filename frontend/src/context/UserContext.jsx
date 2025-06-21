import axios from "axios";
import { createContext, useState, useEffect } from "react";

// 1. Crear el contexto
export const UserContext = createContext();

// 2. Proveedor de contexto
export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  // Este efecto se ejecuta al cargar la app
  useEffect(() => {
    // Consulta el usuario autenticado al cargar la app
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/perfil`, { withCredentials: true })
      .then((res) => {
        setUsuario(res.data.usuario);
      })
      .catch(() => {
        setUsuario(null);
      });
  }, []);

  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UserContext.Provider>
  );
};
