// src/components/layout/TopNav.jsx

import { Link } from "react-router-dom";

/*
  Este componente representa el MENÚ SUPERIOR de la app.

  Decisiones importantes:
  - Es un componente de layout, no una página.
  - No tiene lógica compleja.
  - No tiene estilos finales (solo estructura).
  - Aquí definimos QUÉ SECCIONES EXISTEN en la app.
*/

export default function TopNav() {
  return (
    <header>
      {/* Zona izquierda: logo o nombre de la app */}
      <div>
        {/* En el futuro esto podría ser un logo */}
        <Link to="/dashboard">
          <strong>Aprender Español</strong>
        </Link>
      </div>

      {/* Zona central: navegación principal */}
      <nav>
        {/* Estas rutas pueden no existir todavía */}
        {/* Lo importante ahora es definir la intención */}
        <Link to="/levels">Niveles</Link>
        <Link to="/achievements">Logros</Link>
      </nav>

      {/* Zona derecha: usuario */}
      <div>
        {/* 
          En el futuro aquí irá:
          - avatar
          - nombre de usuario
          - menú desplegable
        */}
        <Link to="/profile">Perfil</Link>

        {/* 
          El logout NO lo implementamos aquí aún.
          Más adelante vendrá conectado al contexto de auth.
        */}
        <button>
          Logout
        </button>
      </div>
    </header>
  );
}
