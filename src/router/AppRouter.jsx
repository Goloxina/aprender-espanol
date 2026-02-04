// src/router/AppRouter.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

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

export default function AppRouter() {
  return (
    <BrowserRouter>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
