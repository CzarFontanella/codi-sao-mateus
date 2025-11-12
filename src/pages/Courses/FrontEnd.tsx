// FrontendCourse.tsx
import {
  Palette,
  LayoutDashboard,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Zap,
  Brain,
  Braces,
  FileUser,
  TypeOutline,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function FrontEnd() {
  const navigate = useNavigate();

  const goToMatricula = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    navigate(href, { state: { scrollToId: "site-main" } });
  };

  const learningOutcomes = [
    "Desenvolver páginas web modernas e responsivas.",
    "Interatividade em sites manipulando DOM, eventos e dados.",
    "Criar projetos completos inspirados em plataformas reais.",
    "Construir aplicações compondo interfaces, formulários e consumindo APIs.",
    "Escrever código mais seguro e organizado.",
    "Criar interfaces funcionais, atraentes e centradas no usuário.",
  ];

  const modules = [
    {
      title: "Módulo 1 — Introdução ao Desenvolvimento Web",
      hours: 12,
      bullets: [
        "Aprenda HTML e CSS para estruturar e estilizar páginas.",
        "Use Flexbox para criar layouts modernos e responsivos.",
        "Desenvolva páginas interativas do zero.",
      ],
      icon: Brain,
    },
    {
      title: "Módulo 2 — JavaScript Essencial",
      hours: 12,
      bullets: [
        "Domine variáveis, funções, loops e eventos.",
        "Manipule o DOM e trabalhe com JSON.",
        "Crie interatividade e dinamismo em páginas web.",
      ],
      icon: Braces,
    },
    {
      title: "Módulo 3 — Projetos Práticos",
      hours: 12,
      bullets: [
        "Reproduza sites inspirados em Netflix, YouTube e Google.",
        "Desenvolva funcionalidades de plataformas sociais como Twitter e LinkedIn.",
        "Aplique conhecimentos de HTML, CSS e JavaScript em projetos reais.",
      ],
      icon: Palette,
    },
    {
      title: "Módulo 4 — Frameworks",
      hours: 12,
      bullets: [
        "Aprenda React e Vue.js do básico ao avançado.",
        "Crie componentes, formulários e páginas interativas.",
        "Consuma APIs e integre funcionalidades complexas.",
      ],
      icon: LayoutDashboard,
    },
    {
      title: "Módulo 5 — TypeScript",
      hours: 12,
      bullets: [
        "Escreva códigos mais organizados e seguros.",
        "Evite erros comuns com tipagem estática.",
        "Prepare projetos para ambientes profissionais e escaláveis.",
      ],
      icon: TypeOutline,
    },
    {
      title: "Módulo 6 — UI/UX",
      hours: 12,
      bullets: [
        "Entenda princípios de design e experiência do usuário.",
        "Crie interfaces funcionais e esteticamente agradáveis.",
        "Aplique boas práticas de usabilidade em projetos web.",
      ],
      icon: FileUser,
    },
  ];

  const totalHours = modules.reduce((acc, m) => acc + m.hours, 0);

  return (
    <section className="w-full bg-gray-950 text-white">
      {/* HERO */}
      <header className="relative isolate">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          <div className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-800 p-6 sm:p-10 ring-1 ring-white/10 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white/90">
                <Palette className="h-4 w-4" aria-hidden />
                Trilha Profissional Front End
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">
                Front End — React, Tailwind e Deploy moderno
              </h1>
              <p className="max-w-3xl text-base sm:text-lg text-white/95">
                Foco prático em HTML, CSS (incluindo Tailwind), JavaScript,
                React, Vue.js, TypeScript, UI/UX e Git. Ideal para quem quer
                criar sites modernos, dominar ferramentas do mercado e
                desenvolver projetos inspirados em plataformas como Netflix e
                Spotify.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-white/95">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-5 w-5" aria-hidden />
                  {totalHours}h totais
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="h-5 w-5" aria-hidden />
                  Avançado
                </span>
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="h-5 w-5" aria-hidden />
                  Projeto integrador e material incluso
                </span>
              </div>

              <div className="mt-2 flex flex-wrap gap-3">
                <NavLink
                  to="/matricula"
                  onClick={(e) => goToMatricula(e, "/matricula")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-violet-800 transition"
                >
                  <Zap className="h-5 w-5" />
                  Matricule-se
                </NavLink>
              </div>
            </div>

            {/* Decor */}
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-white/20 blur-3xl"
              aria-hidden
            />
          </div>
        </div>
      </header>

      {/* MAIN (alvo do scroll externo) */}
      <main
        id="site-main"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
      >
        {/* O que você vai aprender */}
        <section
          aria-labelledby="aprendizado"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <article className="lg:col-span-2 rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 sm:p-8">
            <header className="mb-4">
              <h2
                id="aprendizado"
                className="text-xl sm:text-2xl font-semibold"
              >
                O que você vai aprender
              </h2>
              <p className="mt-2 text-gray-300">
                Da base sólida de HTML/CSS/JS à publicação de uma SPA completa
                com React, performance e boas práticas de acessibilidade.
              </p>
            </header>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {learningOutcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 mt-0.5 shrink-0 text-fuchsia-300"
                    aria-hidden
                  />
                  <span className="text-sm sm:text-base text-gray-100">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Informações rápidas</h3>
            <dl className="mt-4 space-y-3 text-gray-200">
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Público-alvo</dt>
                <dd className="text-sm text-gray-100 text-right">
                  Iniciantes e devs buscando profissionalização em React
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Pré-requisitos</dt>
                <dd className="text-sm text-gray-100 text-right">
                  Noções de Informatica e Lógica
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Metodologia</dt>
                <dd className="text-sm text-gray-100 text-right">
                  Aulas práticas, desafios guiados e projeto integrador
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Certificado</dt>
                <dd className="text-sm text-gray-100 text-right">
                  Emissão após aprovação (≥ 60%)
                </dd>
              </div>
            </dl>
          </aside>
        </section>

        {/* Módulos */}
        <section aria-labelledby="modulos" className="mt-10 sm:mt-14">
          <h2 id="modulos" className="text-xl sm:text-2xl font-semibold mb-4">
            Módulos do curso
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {modules.map((m) => {
              const Icon = m.icon;
              return (
                <article
                  key={m.title}
                  className="relative rounded-2xl ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 sm:p-6 hover:ring-white/20 transition"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-fuchsia-400/20 ring-1 ring-white/10 p-2">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{m.title}</h3>
                      <p className="mt-0.5 text-sm text-gray-300 flex items-center gap-2">
                        <Clock className="h-4 w-4" aria-hidden /> {m.hours}h
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-gray-100">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2
                          className="h-4 w-4 mt-0.5 text-fuchsia-300 shrink-0"
                          aria-hidden
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA Final */}
        <section className="mt-10 sm:mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-gray-300 max-w-3xl">
            Pronto para lançar interfaces modernas em produção? Garanta sua vaga
            e publique seu primeiro projeto com confiança.
          </p>
          <NavLink
            to="/matricula"
            onClick={(e) => goToMatricula(e, "/matricula")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-6 py-3.5 text-base font-semibold ring-1 ring-white/10 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-gray-950 transition"
          >
            <Zap className="h-5 w-5" />
            Matricule-se agora
          </NavLink>
        </section>
      </main>
    </section>
  );
}
