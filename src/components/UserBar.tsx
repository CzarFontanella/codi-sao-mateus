import { NavLink } from "react-router-dom";

export default function UserBar({authenticated}: {authenticated?: boolean}) {
  return (
          <div className="w-full bg-[#A243D2] text-white py-1 text-md flex
        justify-between px-4 md:px-8 lg:px-16">
        <div>
          Matrículas Abertas! Inscreva-se já nos nossos cursos.
        </div>

        {authenticated ? (
          <div className="flex gap-2">
            <NavLink className="hover:text-gray-200" to="/dashboard">Area do Aluno</NavLink>
            <p>|</p>
            <NavLink className="hover:text-gray-200" to="/logout">Sair</NavLink>
          </div>
        ) : (
        <div className="flex gap-2">
          <NavLink className="hover:text-gray-200" to="/login">Login</NavLink>
          <p>|</p>
          <NavLink className="hover:text-gray-200" to="/register">Cadastre-se</NavLink>
        </div>
        )}
      </div>
  );
}