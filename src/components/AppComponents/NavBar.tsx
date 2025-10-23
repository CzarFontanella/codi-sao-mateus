import { Bookmark, Glasses, GraduationCap, Home, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const brand = "#A243D2";

  const { pathname } = useLocation();
  const navigate = useNavigate();

  // navega e rola até um id específico na HOME, sem exibir hash
  function goto(
    e: React.MouseEvent<HTMLAnchorElement>,
    targetPath: string,
    scrollToId: string
  ) {
    e.preventDefault();
    if (pathname === targetPath) {
      document.getElementById(scrollToId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate(targetPath, { state: { scrollToId } });
    }
  }

  const linkBase =
    "relative inline-flex h-12 items-center gap-4 rounded-md px-4 text-base font-semibold leading-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white/0";
  const linkInactive = "text-gray-700 hover:text-gray-900 hover:bg-black/5";

  function LinkItem({
    to,
    icon,
    label,
    onClick,
  }: {
    to: string;
    icon: LucideIcon;
    label: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }) {
    const Icon = icon;
    // IMPORTANTE: ignoramos isActive — nunca aplica estilo “ativo”
    return (
      <NavLink
        to={to}
        onClick={onClick}
        className={[linkBase, linkInactive].join(" ")}
      >
        <Icon className="w-5 h-5 lg:w-6 lg:h-6 shrink-0" />
        <span
          className="
            relative inline-block whitespace-nowrap
            after:absolute after:left-0 after:right-0 after:bottom-[-3px]
            after:h-[3px] after:rounded-full after:bg-current
            after:scale-x-0 hover:after:scale-x-100 after:transition-transform
          "
        >
          {label}
        </span>
      </NavLink>
    );
  }

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 text-gray-900">
      <div className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HEADER ROW relative para centralizar absoluto */}
          <div className="relative flex h-20 items-center gap-6">
            {/* Logo à esquerda */}
            <NavLink
              to="/"
              className="shrink-0 inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A243D2] rounded-md"
            >
              <img
                src="https://codiacademy.com.br/wp-content/uploads/2024/11/thelogocelularnovonovo.png"
                alt="Codi Academy"
                className="h-12 w-auto"
                loading="lazy"
              />
            </NavLink>

            {/* Botão mobile */}
            <button
              className="ml-auto inline-flex items-center justify-center rounded-md p-3 text-gray-800 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A243D2] md:hidden"
              aria-controls="primary-navigation"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Abrir menu</span>
              {open ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
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
                  className="h-7 w-7"
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

            {/* Navegação desktop — centro real + sem quebra */}
            <div
              id="primary-navigation"
              className="hidden md:flex items-center
                         absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                         gap-4 lg:gap-6 whitespace-nowrap"
            >
              <LinkItem to="/" icon={Home} label="Home" />

              {/* Cursos: continua levando à HOME + scroll para #courses */}
              <LinkItem
                to="/"
                icon={GraduationCap}
                label="Cursos"
                onClick={(e) => goto(e, "/", "courses")}
              />

              {/* Quem Somos: HOME + scroll para #about */}
              <LinkItem
                to="/"
                icon={Glasses}
                label="Quem Somos"
                onClick={(e) => goto(e, "/", "about")}
              />

              <LinkItem to="/matricula" icon={Bookmark} label="Matricule-se" />
            </div>
          </div>
        </div>
      </div>

      {/* Navegação mobile (colapso real de altura quando fechado) */}
      <div
        className={[
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out will-change-[max-height]",
          open
            ? "max-h-[480px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div
          className={[
            "border-b border-black/10 bg-white/85 backdrop-blur",
            open ? "py-3" : "py-0",
          ].join(" ")}
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-2">
              <LinkItem
                to="/"
                icon={Home}
                label="Home"
                onClick={() => setOpen(false)}
              />

              <LinkItem
                to="/"
                icon={GraduationCap}
                label="Cursos"
                onClick={(e) => {
                  goto(e, "/", "courses");
                  setOpen(false);
                }}
              />

              <LinkItem
                to="/"
                icon={Glasses}
                label="Quem Somos"
                onClick={(e) => {
                  goto(e, "/", "about");
                  setOpen(false);
                }}
              />

              {/* CTA mobile maior */}
              <NavLink
                to="/matricula"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center gap-3 rounded-xl px-5 py-3 text-base font-semibold text-white hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A243D2]"
                style={{ backgroundColor: brand }}
              >
                <Zap className="w-5 h-5" />
                Matricule-se Já!
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
