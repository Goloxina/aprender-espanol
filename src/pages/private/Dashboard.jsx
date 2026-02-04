// src/pages/private/Dashboard.jsx
import { useAuth } from "../../context/AuthContext";
import { mockUser, mockGlosario, mockConjugaciones } from "../../utils/mockData";
import { Link } from "react-router-dom";
import WelcomeMessage from "../../components/ui/WelcomeMessage";

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    
    <div style={{ background: "#fff", minHeight: "80vh" }}>  {/* objeto válido */}
  <WelcomeMessage />

      <h1>Menú completo - ¡Bienvenid@, {mockUser.nombre}!</h1>

      <p style={{ color: "#666", marginBottom: "2rem" }}>
        Nivel actual: {mockUser.nivelActual} | Progreso: {mockUser.progresoPorcentaje}%
      </p>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "1.5rem"
      }}>
        <Link to="/leccion">
  <div style={{ 
    border: "2px solid #007bff", 
    padding: "2.5rem",  // un poco más grande para destacar
    textAlign: "center", 
    borderRadius: "12px",
    background: "#f8f9fa",
    cursor: "pointer"
  }}>
    <h2>
      {mockUser.ultimaLeccion 
        ? "Continuar donde lo dejaste" 
        : "Empezar ahora"}
    </h2>
    <p style={{ fontSize: "1.1rem", fontWeight: "bold", marginTop: "0.5rem" }}>
      {mockUser.ultimaLeccion 
        ? mockUser.ultimaLeccion.titulo 
        : `Nivel recomendado: ${mockUser.nivelRecomendado || "A1.1"}`}
    </p>
  </div>
</Link>

        <Link to="/glosario">
          <div style={{ 
            border: "2px solid #28a745", 
            padding: "2rem", 
            textAlign: "center", 
            borderRadius: "12px",
            background: "#f8f9fa"
          }}>
            <h2>Glosario</h2>
            <p>{mockGlosario.palabras.length + mockGlosario.verbos.length} términos aprendidos</p>
          </div>
        </Link>

        <Link to="/tiempos-verbales">
          <div style={{ 
            border: "2px solid #ffc107", 
            padding: "2rem", 
            textAlign: "center", 
            borderRadius: "12px",
            background: "#f8f9fa"
          }}>
            <h2>Tiempos verbales</h2>
            <p>Practica {mockConjugaciones.tiempos.length} tiempos</p>
          </div>
        </Link>

        <div style={{ 
          border: "2px solid #dc3545", 
          padding: "2rem", 
          textAlign: "center", 
          borderRadius: "12px",
          background: "#f8f9fa"
        }}>
          <h2>Salir</h2>
          <button 
            onClick={logout}
            style={{ 
              padding: "0.8rem 1.5rem", 
              marginTop: "1rem", 
              background: "#dc3545", 
              color: "white", 
              border: "none", 
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}