import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const manejarSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        { email, password }
      );
      console.log("Respuesta login:", res.data);

      // Guarda usuario + token en el contexto (y en localStorage)
      login({
        ...res.data.usuario,
        token: res.data.token,
      });

      navigate("/perfil");
    } catch (err) {
      console.error("Error en login:", err.response?.data || err);
      setError(
        err.response?.data?.error || "Error al iniciar sesión. Intenta de nuevo."
      );
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className="text-center my-4">Accede a tu cuenta</h2>
        <form onSubmit={manejarSubmit}>
          {/* ...inputs igual que antes... */}
        </form>
      </div>
    </div>
  );
};

export default Login;
