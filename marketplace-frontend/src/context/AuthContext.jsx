import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [publicaciones, setPublicaciones] = useState([]);

  const login = (datos) => setUsuario(datos);
  const logout = () => setUsuario(null);

  // Función para agregar publicaciones
  const agregarPublicacion = (publicacion) => {
    setPublicaciones(prev => [...prev, publicacion]);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, publicaciones, agregarPublicacion }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

