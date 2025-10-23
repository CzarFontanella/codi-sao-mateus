import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Enroll from "./pages/Enroll";
import Login from "./pages/Login";
import Register from "./pages/Register";

import FrontEnd from "./pages/Courses/FrontEnd";
import Informatica from "./pages/Courses/Informatica";
import BackEnd from "./pages/Courses/BackEnd";
import DataScience from "./pages/Courses/DataScience";
import FullStack from "./pages/Courses/FullStack";
import IA from "./pages/Courses/IA";

type AppRouterProps = {
  authenticated: boolean;
  setAuthenticated: (v: boolean) => void;
};

function Logout({ onLogout }: { onLogout: () => void }) {
  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Navigate to="/" replace />;
}

// auth: boolean (true = logado)
export default function Router({
  authenticated,
  setAuthenticated,
}: AppRouterProps) {
  return (
    <Routes>
      {/* Rota protegida */}
      <Route
        path="/dashboard"
        element={
          authenticated ? <h1>Dashboard</h1> : <Navigate to="/login" replace />
        }
      />

      {/* Auth pages (redireciona se já logado) */}
      <Route
        path="/login"
        element={
          authenticated ? <Navigate to="/dashboard" replace /> : <Login />
        }
      />
      <Route
        path="/cadastro"
        element={
          authenticated ? <Navigate to="/dashboard" replace /> : <Register />
        }
      />

      {/* Logout com side-effect seguro */}
      <Route
        path="/logout"
        element={<Logout onLogout={() => setAuthenticated(false)} />}
      />

      {/* Rotas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/matricula" element={<Enroll />} />

      {/* CURSOS */}
      <Route path="/cursos/frontend" element={<FrontEnd />} />
      <Route path="/cursos/backend" element={<BackEnd />} />
      <Route path="/cursos/fullstack" element={<FullStack />} />
      <Route path="/cursos/datascience" element={<DataScience />} />
      <Route path="/cursos/ia" element={<IA />} />
      <Route path="/cursos/informatica" element={<Informatica />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
