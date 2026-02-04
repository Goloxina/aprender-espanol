import { useAuth } from "../../context/AuthContext";
import WelcomeMessage from "../../components/ui/WelcomeMessage";

export default function Dashboard() {
  return (
    <div style={{ padding: "2rem" }}>
      <WelcomeMessage />

      <h1>Dashboard</h1>
      <p>Contenido principal de la app</p>
    </div>
  );
}