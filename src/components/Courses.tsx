import {
  ChartNoAxesCombined,
  Database,
  Layers,
  Palette,
  Zap,
  Cpu,
  Bot,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Courses() {
  const courses = [
    {
      title: "Front End",
      icon: Palette, // <-- componente
      tagline: "Interfaces modernas e responsivas.",
      bullets: ["React + Vite", "Tailwind CSS", "Acessibilidade (a11y)"],
      cta: "Quero construir UIs",
      href: "/cursos/front-end",
      accent: "from-fuchsia-500 to-violet-800",
    },
    {
      title: "Back End",
      icon: Database,
      tagline: "APIs escaláveis e seguras.",
      bullets: ["Node.js/Express", "Auth & JWT", "PostgreSQL/Prisma"],
      cta: "Quero criar APIs",
      href: "/cursos/back-end",
      accent: "from-sky-500 to-cyan-800",
    },
    {
      title: "Full-Stack",
      icon: Layers,
      tagline: "Do banco ao pixel final.",
      bullets: ["React + Node", "Arquitetura REST", "DevOps básico"],
      cta: "Quero ser Full-Stack",
      href: "/cursos/fullstack",
      accent: "from-emerald-500 to-teal-800",
    },
    {
      title: "Data Science",
      icon: ChartNoAxesCombined,
      tagline: "Dados em ação, decisões melhores.",
      bullets: ["Python/Pandas", "ML básico", "Dashboards"],
      cta: "Quero dominar dados",
      href: "/cursos/data-science",
      accent: "from-amber-500 to-orange-600",
    },
    {
      title: "Inteligência Artificial",
      icon: Bot,
      tagline: "Do prompt ao modelo em produção.",
      bullets: ["Prompt Engineering", "LLMs & APIs", "Ética & avaliação"],
      cta: "Quero criar com IA",
      href: "/cursos/ia",
      accent: "from-indigo-500 to-blue-800",
    },
    {
      title: "Informática",
      icon: Cpu,
      tagline: "Fundamentos práticos do computador.",
      bullets: ["S.O. & Office", "Navegação segura", "Organização de arquivos"],
      cta: "Quero começar do zero",
      href: "/cursos/informatica",
      accent: "from-lime-400 to-emerald-700",
    },
  ];

  return (
    <section
      aria-labelledby="cursos-titulo"
      className="w-full bg-gray-950 py-10 sm:py-14 text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-12">
          <h2
            id="cursos-titulo"
            className="text-2xl sm:text-3xl font-semibold tracking-tight"
          >
            Cursos que aceleram sua carreira
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-300">
            Escolha a trilha ideal e comece a construir projetos reais desde a
            primeira aula.
          </p>
        </header>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => {
            const Icon = c.icon; // pega o componente
            return (
              <article
                key={c.title}
                className="group relative isolate rounded-2xl min-h-[360px] hover:shadow-2xl hover:shadow-black/40 transition-shadow"
              >
                {/* Glow atrás */}
                <div
                  className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25 bg-gradient-to-r ${c.accent} -z-10`}
                  aria-hidden="true"
                />

                {/* Wrapper com clip + ring */}
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 bg-gradient-to-b from-white/5 to-white/[0.03] h-full">
                  {/* Barra de acento */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${c.accent} z-20`}
                    aria-hidden="true"
                  />

                  {/* Conteúdo */}
                  <div className="relative z-10 p-6 sm:p-7 flex h-full flex-col text-white items-center text-center">
                    <div
                      className={`inline-flex w-fit h-fit items-center justify-center rounded-xl ring-1 ring-white/10 bg-gradient-to-r ${c.accent} p-2 sm:p-3 md:p-4 mb-4`}
                    >
                      <Icon
                        className="w-12 h-12 sm:w-14 sm:h-14 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                        strokeWidth={1.75}
                      />
                      <span className="sr-only">{c.title}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">{c.tagline}</p>

                    <div className="mt-4 flex-1 w-full">
                      <ul className="space-y-2 text-sm text-gray-200">
                        {c.bullets.map((b) => (
                          <li key={b} className="flex justify-center">
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <NavLink
                      to={c.href}
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-4 py-2.5 text-sm font-medium ring-1 ring-white/10 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-gray-950 transition"
                    >
                      <Zap className="w-5 h-5" />
                      {c.cta}
                    </NavLink>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
