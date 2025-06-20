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
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
