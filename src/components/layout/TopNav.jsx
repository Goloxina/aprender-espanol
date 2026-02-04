// src/components/layout/TopNav.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { mockUser } from "../../utils/mockData";

export default function TopNav() {
  const { logout } = useAuth();

  // Estado para mostrar/ocultar menú de ajustes
  const [showSettings, setShowSettings] = useState(false);

  // Estado para tema (guardado en localStorage)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Bandera simple
  const bandera = mockUser.idiomaNativo === "en" ? "🇬🇧" : "🌍";

  // Guardar tema y aplicarlo al body
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme; // aplica clase global (light, dark, rosa...)
  }, [theme]);

  // Lista de temas
  const themes = [
    { name: "Claro", value: "light" },
    { name: "Oscuro", value: "dark" },
    { name: "Rosa", value: "rosa" },
    { name: "Azul", value: "azul" },
    { name: "Verde", value: "verde" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        background: "#fff",
        borderBottom: "1px solid #ddd",
        padding: "0.8rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {/* Izquierda: Nombre app */}
      <div>
        <Link to="/dashboard" style={{ textDecoration: "none", color: "#333", fontSize: "1.3rem", fontWeight: "bold" }}>
          Aprender Español
        </Link>
      </div>

      {/* Centro: Progreso */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ width: "220px" }}>
          <div style={{ height: "10px", background: "#e0e0e0", borderRadius: "5px", overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: `${mockUser.progresoPorcentaje}%`,
                background: "#28a745",
                transition: "width 0.5s ease",
              }}
            />
          </div>
          <p style={{ textAlign: "center", fontSize: "0.9rem", marginTop: "0.4rem" }}>
            {mockUser.progresoPorcentaje}% - Nivel {mockUser.nivelActual}
          </p>
        </div>
      </div>

      {/* Derecha: Usuario, tienda, engranaje, logout */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        {/* Bandera + nombre */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1.2rem" }}>{bandera}</span>
          <span>{mockUser.nombre}</span>
        </div>

        {/* Tienda */}
        <Link to="#" style={{ color: "#007bff", textDecoration: "none" }}>
          Tienda
        </Link>

        {/* Engranaje de ajustes */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setShowSettings(!showSettings)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.4rem",
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            ⚙️
          </button>

          {/* Menú desplegable */}
          {showSettings && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                padding: "1rem",
                minWidth: "220px",
                zIndex: 1001,
              }}
            >
              <h4 style={{ margin: "0 0 0.8rem 0" }}>Ajustes</h4>

              {/* Tema */}
              <div style={{ marginBottom: "1rem" }}>
                <label>Tema: </label>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  style={{ padding: "0.4rem", marginLeft: "0.5rem" }}
                >
                  {themes.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sonido */}
              <div style={{ marginBottom: "1rem" }}>
                <label>
                  <input type="checkbox" defaultChecked /> Sonido
                </label>
              </div>

              {/* Cambiar / Añadir usuario */}
              <div>
                <p style={{ margin: "0.5rem 0" }}>Usuario actual: <strong>Ana</strong></p>
                <select style={{ padding: "0.4rem", width: "100%", marginBottom: "0.5rem" }}>
                  <option>Ana (actual)</option>
                  <option>Juan</option>
                  <option>María</option>
                </select>

                <button
                  onClick={() => {
                    const nombre = prompt("Nombre del nuevo usuario:");
                    if (nombre && nombre.trim()) {
                      alert(`Usuario ${nombre} añadido (mock por ahora)`);
                    }
                  }}
                  style={{
                    padding: "0.4rem 0.8rem",
                    background: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  + Añadir usuario
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          style={{
            padding: "0.5rem 1rem",
            background: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}