import { createContext, useState, useEffect } from "react";
import axios from "axios";

// 1. Crear el contexto
export const UserContext = createContext();

// 2. Proveedor de contexto
const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  // Recuperar usuario y token desde localStorage al iniciar la app
  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    const tokenGuardado = localStorage.getItem("token");

    if (usuarioGuardado && tokenGuardado) {
      setUsuario({
        ...JSON.parse(usuarioGuardado),
        token: tokenGuardado,
      });
    }
  }, []);

  // Guardar o limpiar localStorage cuando cambia el usuario
  useEffect(() => {
    if (usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
      localStorage.setItem("token", usuario.token);
    } else {
      localStorage.removeItem("usuario");
      localStorage.removeItem("token");
    }
  }, [usuario]);

  // Función para iniciar sesión (guardar usuario y token)
  const login = (datos) => {
    setUsuario(datos);
    localStorage.setItem("usuario", JSON.stringify(datos));
    localStorage.setItem("token", datos.token);
  };

  // Función para cerrar sesión
  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
  };

  // Login desde backend si se usa directamente aquí (opcional)
  const iniciarSesion = async (credenciales) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        credenciales
      );
      const datos = {
        ...response.data.usuario,
        token: response.data.token,
      };
      login(datos); // usamos login para setear todo
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ usuario, login, logout, iniciarSesion }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
