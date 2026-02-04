import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <p>¡Bienvenido a tu minilección de prueba!</p>

      {/* Ejercicio de ejemplo */}
      <div style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}>
        <p>Pregunta: ¿Cómo se dice "Hola" en inglés?</p>
        <button>Respuesta: Hello</button>
      </div>

      {/* Botón de logout */}
      <button style={{ marginTop: "1rem" }} onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
}
