import {
  Mail,
  MessageSquare,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const accent = "#A243D2";

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const linkBtn =
    "inline-flex items-center justify-between rounded-lg px-3 py-2 ring-1 ring-white/10 bg-white/5 hover:bg-white/10";

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

  return (
    <footer
      id="site-footer"
      role="contentinfo"
      className="scroll-mt-24 bg-gray-950 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Header do bloco "Fale conosco" */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/10 px-3 py-1.5 bg-gradient-to-r from-white/5 to-white/[0.03]">
            <MessageSquare className="w-5 h-5 text-yellow-300" />
            <span className="font-semibold text-yellow-300">Fale conosco</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
            Estamos por aqui para ajudar
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/70">
            Dúvidas sobre cursos, matrículas ou parcerias? Fale com a gente por
            telefone ou e-mail.
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Contatos (CARD) */}
          <section aria-labelledby="contatos-titulo" className="flex flex-col">
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] h-full">
              {/* accent sólida */}
              <div className="h-1 w-full" style={{ backgroundColor: accent }} />
              <div className="p-6">
                <h3 id="contatos-titulo" className="text-lg font-semibold">
                  Contatos
                </h3>

                <ul className="mt-4 space-y-3 text-white/90">
                  <li>
                    <a
                      href="tel:+5532988156599"
                      className="group inline-flex items-center gap-3 hover:text-white"
                    >
                      <span className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2">
                        <Phone className="w-5 h-5" />
                      </span>
                      <span className="font-medium">(32) 98815-6599</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:adm@codiacademy.com"
                      className="group inline-flex items-center gap-3 hover:text-white"
                    >
                      <span className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2">
                        <Mail className="w-5 h-5" />
                      </span>
                      <span className="font-medium">adm@codiacademy.com</span>
                    </a>
                  </li>
                </ul>

                {/* Socials */}
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/codi.academy/"
                    aria-label="Instagram"
                    className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/codiacademy/"
                    aria-label="Facebook"
                    className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@CodiAcademytv"
                    aria-label="YouTube"
                    className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/codi-academy/"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Links rápidos (CARD) */}
          <section aria-labelledby="links-titulo" className="flex flex-col">
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] h-full">
              {/* accent sólida */}
              <div className="h-1 w-full" style={{ backgroundColor: accent }} />
              <div className="p-6">
                <h3 id="links-titulo" className="text-lg font-semibold">
                  Links rápidos
                </h3>
                <nav className="mt-4 grid gap-2 text-white/80">
                  <NavLink
                    to="/"
                    onClick={(e) => goto(e, "/", "site-main")}
                    className={linkBtn}
                  >
                    <span>Home</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </NavLink>
                  <NavLink
                    to="/"
                    onClick={(e) => goto(e, "/", "about")}
                    className={linkBtn}
                  >
                    <span>Quem Somos</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </NavLink>
                  <NavLink
                    to="/"
                    onClick={(e) => goto(e, "/", "courses")}
                    className={linkBtn}
                  >
                    <span>Cursos</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </NavLink>
                  <NavLink
                    to="/enroll"
                    onClick={(e) => goto(e, "/enroll", "site-main")}
                    className={linkBtn}
                  >
                    <span>Matricule-se</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </NavLink>
                </nav>
              </div>
            </div>
          </section>

          {/* Sobre / Marca (CARD) */}
          <section className="flex flex-col">
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] h-full">
              {/* accent sólida */}
              <div className="h-1 w-full" style={{ backgroundColor: accent }} />
              <div className="p-6 text-center">
                <img
                  src="https://codiacademy.com.br/wp-content/uploads/2024/11/thelogocelularnovonovo.png"
                  alt="Codi Academy"
                  className="h-10 w-auto block mx-auto rounded"
                  loading="lazy"
                />
                <p className="mt-3 text-sm text-white/70">
                  Formação prática e direta ao ponto. Aprenda construindo
                  projetos reais com acompanhamento próximo.
                </p>
                <p className="mt-3 text-xs text-white/50">
                  Suporte por telefone e e-mail em horário comercial.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* faixa final */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Codi Academy. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
