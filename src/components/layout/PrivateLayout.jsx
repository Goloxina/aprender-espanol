// src/components/layout/PrivateLayout.jsx
import { Outlet } from "react-router-dom";  // ← Outlet SÍ se importa aquí
import TopNav from "./TopNav";

export default function PrivateLayout() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <TopNav />

      <main style={{
        flex: 1,
        padding: "2rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        background: "#f8f9fa",
        minHeight: "calc(100vh - 70px)",  // ajusta 70px si tu TopNav es más alto
      }}>
        <Outlet />  {/* Aquí se renderizan Dashboard, Glosario, etc. */}
      </main>
    </div>
  );
}