import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Enroll from "./pages/Enroll";
import FrontEnd from "./pages/Courses/FrontEnd";
import Informatica from "./pages/Courses/Informatica";
import BackEnd from "./pages/Courses/BackEnd";
import DataScience from "./pages/Courses/DataScience";
import FullStack from "./pages/Courses/FullStack";
import IA from "./pages/Courses/IA";
import Ingles from "./pages/Courses/Ingles";

// auth: boolean (true = logado)
export default function Router() {
  return (
    <Routes>
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
      <Route path="/cursos/ingles" element={<Ingles />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
