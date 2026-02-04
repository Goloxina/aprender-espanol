// src/pages/public/Login.jsx
import { useState } from "react";
import { useAuth } from "../../context/AuthContext"; // <--- contexto de auth

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recarga
    login(email, password); // usa login fake
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="demo"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="1234"
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>Usuario de prueba: demo / 1234</p>
    </div>
  );
}
