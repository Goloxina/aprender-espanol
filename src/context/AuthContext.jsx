// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

/*
  Auth fake:
  - Un solo usuario válido
  - Sirve SOLO para probar flujo y rutas
*/

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => {
    if (email === "demo" && password === "1234") {
      setUser({ email });

      console.log("LOGIN OK, navegando a dashboard");
      navigate("/dashboard");
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
