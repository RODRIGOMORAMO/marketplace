import { createContext, useState, useEffect } from "react";

// 1. Crear el contexto
export const UserContext = createContext();

// 2. Proveedor de contexto
const UserProvider = ({ children }) => {
  // Inicializa el usuario desde localStorage
  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  });

  // Función para iniciar sesión (guarda usuario y token)
  const login = (datos) => {
    setUsuario(datos);
  };

  // Función para cerrar sesión
  const logout = () => {
    setUsuario(null);
  };

  useEffect(() => {
    if (usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
    } else {
      localStorage.removeItem("usuario");
    }
  }, [usuario]);

  return (
    <UserContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
