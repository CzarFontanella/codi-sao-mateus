import {
  Mail,
  MessageSquare,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ArrowUpRight,
  ChartNoAxesCombined,
  Database,
  Layers,
  Palette,
  Cpu,
  Bot,
  Globe,
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const accent = "#A243D2";

  // endereço para o mapa
  const address = "Rua Professor Freire, 125, São Mateus, Juiz de Fora";
  const addressQuery = encodeURIComponent(address);
  const mapsEmbedSrc = `https://www.google.com/maps?q=${addressQuery}&z=16&output=embed`;

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
                      href="http://wa.me/5532988156599"
                      className="group inline-flex items-center gap-3 hover:text-white"
                    >
                      <span className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-whatsapp w-5 h-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                      </span>
                      <span className="font-medium">Whatsapp</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+5532988156599"
                      className="group inline-flex items-center gap-3 hover:text-white"
                    >
                      <span className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10">
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
                      <span className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10">
                        <Mail className="w-5 h-5" />
                      </span>
                      <span className="font-medium">adm@codiacademy.com</span>
                    </a>
                  </li>
                </ul>

                {/* Socials */}
                <h3 id="socials-titulo" className="mt-3 text-lg font-semibold">
                  Sociais
                </h3>
                <div className="mt-3 flex items-center gap-3">
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
                <p className="mt-5 text-sm text-white/70">
                  Formação prática e direta ao ponto.
                </p>
                <p className="mt-3 text-xs text-white/50">
                  Suporte por telefone e e-mail em horário comercial.
                </p>
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
                    onClick={(e) => goto(e, "/sao-mateus", "site-main")}
                    className={linkBtn}
                  >
                    <span>Home</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </NavLink>

                  <NavLink
                    to="/"
                    onClick={(e) => goto(e, "/sao-mateus", "courses")}
                    className={linkBtn}
                  >
                    <span>Cursos</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </NavLink>

                  <NavLink
                    to="/"
                    onClick={(e) => goto(e, "/sao-mateus", "about")}
                    className={linkBtn}
                  >
                    <span>Quem Somos</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </NavLink>

                  <NavLink
                    to="/matricula"
                    onClick={(e) => goto(e, "/matricula", "site-main")}
                    className={linkBtn}
                  >
                    <span>Matricule-se</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </NavLink>

                  <h3 id="cursos-titulo" className="mt-1 text-lg font-semibold">
                    Cursos
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <NavLink
                      to="/cursos/frontend"
                      onClick={(e) => goto(e, "/cursos/frontend", "site-main")}
                      className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10"
                    >
                      <Palette />
                    </NavLink>
                    <NavLink
                      to="/cursos/backend"
                      onClick={(e) => goto(e, "/cursos/backend", "site-main")}
                      className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10"
                    >
                      <Database />
                    </NavLink>
                    <NavLink
                      to="/cursos/fullstack"
                      onClick={(e) => goto(e, "/cursos/fullstack", "site-main")}
                      className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10"
                    >
                      <Layers />
                    </NavLink>
                    <NavLink
                      to="/cursos/datascience"
                      onClick={(e) =>
                        goto(e, "/cursos/datascience", "site-main")
                      }
                      className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10"
                    >
                      <ChartNoAxesCombined />
                    </NavLink>
                    <NavLink
                      to="/cursos/ia"
                      onClick={(e) => goto(e, "/cursos/ia", "site-main")}
                      className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10"
                    >
                      <Bot />
                    </NavLink>
                    <NavLink
                      to="/cursos/informatica"
                      onClick={(e) =>
                        goto(e, "/cursos/informatica", "site-main")
                      }
                      className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10"
                    >
                      <Cpu />
                    </NavLink>
                    <NavLink
                      to="/cursos/ingles"
                      onClick={(e) => goto(e, "/cursos/ingles", "site-main")}
                      className="inline-flex items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10"
                    >
                      <Globe />
                    </NavLink>
                  </div>
                </nav>
              </div>
            </div>
          </section>

          {/* Sobre / Marca (CARD) */}
          <section className="flex flex-col">
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] h-full">
              {/* accent sólida */}
              <div className="h-1 w-full" style={{ backgroundColor: accent }} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-center">
                  Onde estamos
                </h3>

                {/* Mapa Google (embed público) */}
                <div className="mt-4 rounded-xl overflow-hidden ring-1 ring-white/10">
                  <iframe
                    title={`Mapa - ${address}`}
                    src={mapsEmbedSrc}
                    width="100%"
                    height="240"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block"
                  />
                </div>

                <p className="mt-3 text-sm text-white/70 text-center">
                  {address}
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
