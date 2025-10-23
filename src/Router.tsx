import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Enroll from "./pages/Enroll";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
                authenticated ? (
                  <h1>Dashboard</h1>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            {/* Auth pages (redireciona se já logado) */}
            <Route
              path="/login"
              element={
                authenticated ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Login />
                )
              }
            />
            <Route
              path="/register"
              element={
                authenticated ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Register />
                )
              }
            />

            {/* Logout com side-effect seguro */}
            <Route
              path="/logout"
              element={<Logout onLogout={() => setAuthenticated(false)} />}
            />

            {/* Rotas públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/enroll" element={<Enroll />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
  );
}
