// FrontendCourse.tsx
import {
  Palette,
  Code2,
  MonitorSmartphone,
  LayoutDashboard,
  Accessibility,
  GitBranch,
  Search,
  Gauge,
  Rocket,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Zap,
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
    "Construir SPAs modernas com React + Vite",
    "Estilizar com Tailwind CSS e boas práticas de design",
    "Aplicar acessibilidade (a11y) e SEO técnico",
    "Consumir APIs REST, lidar com estados e cache",
    "Roteamento, formulários e validação",
    "Testes, performance e deploy profissional",
  ];

  const modules = [
    {
      title: "Módulo 1 — Fundamentos Web & Ambiente",
      hours: 4,
      bullets: [
        "HTML semântico, CSS moderno, ES202x",
        "Ferramentas: Node, pnpm/npm, Vite",
        "Git & GitHub: fluxo básico",
      ],
      icon: MonitorSmartphone,
    },
    {
      title: "Módulo 2 — React Essencial",
      hours: 10,
      bullets: [
        "Componentes, props e estado",
        "Hooks fundamentais (useState/useEffect)",
        "Padrões de composição",
      ],
      icon: Code2,
    },
    {
      title: "Módulo 3 — Estilos com Tailwind",
      hours: 6,
      bullets: [
        "Design tokens e utilitários",
        "Layouts responsivos (Grid/Flex)",
        "Componentização e boas práticas",
      ],
      icon: Palette,
    },
    {
      title: "Módulo 4 — Roteamento e Formulários",
      hours: 6,
      bullets: [
        "React Router (rotas, params, loaders)",
        "Formulários controlados e não controlados",
        "Validação com Zod/Yup",
      ],
      icon: LayoutDashboard,
    },
    {
      title: "Módulo 5 — Consumo de APIs e Estado",
      hours: 8,
      bullets: [
        "Fetch/axios, erros e retries",
        "Gerência de estado local e global",
        "React Query (cache, revalidação)",
      ],
      icon: GitBranch,
    },
    {
      title: "Módulo 6 — Acessibilidade e SEO",
      hours: 6,
      bullets: [
        "ARIA, foco, navegação por teclado",
        "Boas práticas de contraste e semântica",
        "Meta tags, sitemaps e pré-render",
      ],
      icon: Accessibility,
    },
    {
      title: "Módulo 7 — Testes e Qualidade",
      hours: 6,
      bullets: [
        "Jest/Vitest: testes de unidade",
        "Testing Library: testes de UI",
        "CI básico e coverage",
      ],
      icon: Search,
    },
    {
      title: "Módulo 8 — Performance & Deploy",
      hours: 6,
      bullets: [
        "Code-splitting, lazy, memos",
        "Lighthouse e Web Vitals",
        "Deploy: Vercel/Netlify/Cloudflare Pages",
      ],
      icon: Gauge,
    },
    {
      title: "Módulo 9 — Projeto Integrador",
      hours: 8,
      bullets: [
        "Design → Implementação end-to-end",
        "Integração com API real",
        "Publicação e apresentação",
      ],
      icon: Rocket,
    },
  ];

  const plan = [
    { week: "Semana 1", topic: "Fundamentos Web, setup e Git", deliverable: "Repositório inicial + checklist" },
    { week: "Semana 2", topic: "React essencial I (componentes/estado)", deliverable: "App de componentes" },
    { week: "Semana 3", topic: "React essencial II (hooks/padrões)", deliverable: "Feature com hooks" },
    { week: "Semana 4", topic: "Tailwind: layout e componentes", deliverable: "Página responsiva" },
    { week: "Semana 5", topic: "Roteamento e formulários", deliverable: "Form com validação" },
    { week: "Semana 6", topic: "APIs e estado assíncrono", deliverable: "Lista consumindo API" },
    { week: "Semana 7", topic: "Acessibilidade e SEO", deliverable: "Checklist a11y + meta tags" },
    { week: "Semana 8", topic: "Testes de unidade e UI", deliverable: "Suite de testes passando" },
    { week: "Semana 9", topic: "Performance I (carga/execução)", deliverable: "Relatório Lighthouse" },
    { week: "Semana 10", topic: "Performance II e DX", deliverable: "Refinos e documentação" },
    { week: "Semana 11", topic: "Projeto integrador — parte 1", deliverable: "MVP publicado (preview)" },
    { week: "Semana 12", topic: "Projeto integrador — parte 2", deliverable: "Entrega final + apresentação" },
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
                <Rocket className="h-4 w-4" aria-hidden />
                Trilha Profissional Front End
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">
                Front End — React, Tailwind e Deploy moderno
              </h1>
              <p className="max-w-3xl text-base sm:text-lg text-white/95">
                Construa interfaces modernas e acessíveis com React, estilização
                ágil com Tailwind e boas práticas de qualidade, performance e
                deploy. Do zero ao projeto publicado.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-white/95">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-5 w-5" aria-hidden />
                  {totalHours}h totais (12 semanas)
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="h-5 w-5" aria-hidden />
                  Iniciante/Intermediário · Turmas reduzidas
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
                <a
                  href="#site-main"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-900/20 text-white px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-violet-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-violet-800 transition"
                >
                  Ver conteúdos
                </a>
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
      <main id="site-main" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* O que você vai aprender */}
        <section aria-labelledby="aprendizado" className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <article className="lg:col-span-2 rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 sm:p-8">
            <header className="mb-4">
              <h2 id="aprendizado" className="text-xl sm:text-2xl font-semibold">
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
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-fuchsia-300" aria-hidden />
                  <span className="text-sm sm:text-base text-gray-100">{item}</span>
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
                  Lógica básica e curiosidade (JavaScript introdutório ajuda)
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
                  Emissão após aprovação (≥ 70%)
                </dd>
              </div>
            </dl>
          </aside>
        </section>

        {/* Módulos */}
        <section aria-labelledby="modulos" className="mt-10 sm:mt-14">
          <h2 id="modulos" className="text-xl sm:text-2xl font-semibold mb-4">Módulos do curso</h2>

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
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-fuchsia-300 shrink-0" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* Plano de Ensino */}
        <section aria-labelledby="plano" className="mt-10 sm:mt-14">
          <h2 id="plano" className="text-xl sm:text-2xl font-semibold mb-4">Plano de ensino (cronograma)</h2>
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10">
                <thead className="bg-white/5">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">Semana</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">Tema</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">Entrega/Avaliação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-white/0">
                  {plan.map((row) => (
                    <tr key={row.week} className="hover:bg-white/[0.03]">
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-100">{row.week}</td>
                      <td className="px-4 py-3 text-sm text-gray-100">{row.topic}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{row.deliverable}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-white/5">
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-100" colSpan={3}>
                      Carga horária total: {totalHours}h · Critérios de aprovação: participação + entregas semanais + projeto final (nota ≥ 7.0)
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="mt-10 sm:mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-gray-300 max-w-3xl">
            Pronto para lançar interfaces modernas em produção? Garanta sua vaga e publique seu primeiro projeto com confiança.
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
