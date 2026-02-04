// src/router/AppRouter.jsx

import { Routes, Route } from "react-router-dom";

import PublicLayout from "../components/layout/PublicLayout";
import PrivateLayout from "../components/layout/PrivateLayout";
import PrivateRoute from "./PrivateRoute";

// Páginas públicas
import Landing from "../pages/public/Landing";
import Login from "../pages/public/Login";

// Páginas privadas
import Dashboard from "../pages/private/Dashboard";
import Levels from "../pages/private/Levels";
import Achievements from "../pages/private/Achievements";
import Profile from "../pages/private/Profile";
import Glosario from "../pages/private/Glosario";
import TiemposVerbales from "../pages/private/TiemposVerbales";
import LeccionActual from "../pages/private/LeccionActual";

export default function AppRouter() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Rutas privadas */}
      <Route
        element={
          <PrivateRoute>
            <PrivateLayout />
          </PrivateRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/profile" element={<Profile />} />

        {/* Rutas mockeadas */}
        <Route path="/glosario" element={<Glosario />} />
        <Route path="/tiempos-verbales" element={<TiemposVerbales />} />
        <Route path="/leccion" element={<LeccionActual />} />
      </Route>
    </Routes>
  );
}