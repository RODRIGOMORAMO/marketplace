import { createContext, useState, useEffect } from "react";

// 1. Crear el contexto
export const UserContext = createContext();

// 2. Proveedor de contexto
const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

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

  const login = (datos) => {
    setUsuario(datos);
    localStorage.setItem("usuario", JSON.stringify(datos));
    localStorage.setItem("token", datos.token);
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
