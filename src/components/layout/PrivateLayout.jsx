// src/components/layout/PrivateLayout.jsx

import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";

/*
  Este layout envuelve TODAS las páginas privadas.

  ¿Por qué existe?
  - Para no repetir menú en cada página
  - Para centralizar cosas comunes (menú, footer, etc.)
*/

export default function PrivateLayout() {
  return (
    <div>
      {/* Menú superior visible solo para usuarios logueados */}
      <TopNav />

      {/* 
        Outlet representa la página concreta:
        - Dashboard
        - Perfil
        - Niveles
        etc.
      */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
