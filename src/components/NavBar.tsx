import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const baseLink =
    "block px-3 py-2 rounded-md text-lg font-bold transition-colors";
  const inactive = "text-gray-600 hover:text-white hover:bg-[#A243D2]";
  const active = "text-gray-800 hover:bg-[#A243D2] hover:text-white";

  return (
    <nav className="w-full border-b border-gray-800 bg-white/80 text-white backdrop-blur py-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* Marca */}
          <NavLink
            to="/"
            className="text-lg flex-start font-semibold tracking-tight text-white"
          >
            <img
              src="https://codiacademy.com.br/wp-content/uploads/2024/11/thelogocelularnovonovo.png"
              alt=""
            />
          </NavLink>

          {/* Botão mobile */}
          <button
            className="
              inline-flex items-center justify-center rounded-md 
              p-2 text-gray-900 hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-[#A243D2] md:hidden"
            aria-controls="primary-navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Abrir menu</span>
            {/* Ícone hambúrguer / X */}
            {open ? (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Navegação desktop */}
          <div
            className="hidden md:flex md:items-center md:space-x-2 justify-center flex-1 gap-12"
            id="primary-navigation"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive ? active : inactive
                } inline-flex h-10 items-center gap-2`
              }
            >
              <span className="material-icons">home</span>
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive ? active : inactive
                } inline-flex h-10 items-center gap-2`
              }
            >
              <span className="material-icons">emoji_people</span>
              Quem Somos
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive ? active : inactive
                } inline-flex h-10 items-center gap-2`
              }
            >
              <span className="material-icons">school</span>
              Cursos
            </NavLink>

            <NavLink
              to="/enroll"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive ? active : inactive
                } inline-flex h-10 items-center gap-2`
              }
            >
              <span className="material-icons">bookmark</span>
              Matricule-se Já!
            </NavLink>
          </div>
        </div>
      </div>

      {/* Navegação mobile */}
      {open && (
        <div
          className="md:hidden border-t border-gray-800"
          id="primary-navigation"
        >
          <div className="space-y-1 px-4 py-3">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? active : inactive}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? active : inactive}`
              }
            >
              Quem Somos
            </NavLink>
            <NavLink
              to="/courses"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${baseLink} ${isActive ? active : inactive}`
              }
            >
              Cursos
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
