import { NavLink } from "react-router-dom";

export default function UserBar({
  authenticated,
}: {
  authenticated?: boolean;
}) {
  return (
    <div
      className="w-full bg-[#A243D2] text-white py-1 text-md flex
        justify-between px-4 md:px-8 lg:px-16 font-medium"
    >
      <div className="inline-flex h-10 items-center gap-4">
        <span className="text-yellow-300">Fale conosco</span>
        <span className="material-icons">phone</span>
        <span>(32)98815-6599</span>
        <span className="material-icons">mail</span>
        <span>adm@codiacademy.com</span>
      </div>

      <div className="inline-flex h-10 items-center gap-2">
        {authenticated ? (
          <>
            <NavLink className="hover:text-gray-200 inline-flex h-10 items-center gap-2" to="/dashboard">
            <span className="material-icons">dashboard</span>
              Area do Aluno
            </NavLink>
            <span>|</span>
            <NavLink className="hover:text-gray-200 inline-flex h-10 items-center gap-2" to="/logout">
              <span className="material-icons">door_back</span>
              Sair
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              className="hover:text-gray-200 inline-flex h-10 items-center gap-2"
              to="/login"
            >
              <span className="material-icons">login</span>
              Login
            </NavLink>
            <span>|</span>
            <NavLink
              className="hover:text-gray-200 inline-flex h-10 items-center gap-2"
              to="/register"
            >
              <span className="material-icons">upload</span>
              Cadastre-se
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
