// FullstackCourse.tsx
import {
  Layers,
  MonitorSmartphone,
  Code2,
  Palette,
  GitBranch,
  Globe,
  Database,
  Shield,
  PlugZap,
  Gauge,
  TerminalSquare,
  FileCode,
  Rocket,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Zap,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function FullStack() {
  const navigate = useNavigate();

  const goToMatricula = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    navigate(href, { state: { scrollToId: "site-main" } });
  };

  const learningOutcomes = [
    "Projetar e desenvolver uma aplicação completa (frontend + backend)",
    "Criar SPAs com React, roteamento, formulários e consumo de APIs",
    "Construir APIs REST com Node.js/Express, autenticação e autorização",
    "Modelar dados com PostgreSQL e Prisma (migrations, seeds, relações)",
    "Gerenciar estado, cache e revalidação com React Query",
    "Testar, observar e publicar com Docker e CI/CD",
  ];

  const modules = [
    {
      title: "Módulo 1 — Fundamentos Full-Stack & Ambiente",
      hours: 4,
      bullets: [
        "Visão 360° (cliente/servidor/banco/deploy)",
        "Node, pnpm/npm, TypeScript, Vite",
        "Git/GitHub e fluxo de trabalho",
      ],
      icon: Layers,
    },
    {
      title: "Módulo 2 — Frontend Base (React)",
      hours: 8,
      bullets: [
        "Componentes, estado e hooks essenciais",
        "Roteamento, formulários e validação",
        "Acessibilidade (a11y) e SEO técnico",
      ],
      icon: MonitorSmartphone,
    },
    {
      title: "Módulo 3 — Estilos e UI (Tailwind)",
      hours: 6,
      bullets: [
        "Design tokens e utilitários",
        "Layout responsivo (Flex/Grid)",
        "Componentização e DX de estilos",
      ],
      icon: Palette,
    },
    {
      title: "Módulo 4 — Backend Web (Express)",
      hours: 8,
      bullets: [
        "Rotas, controladores e middlewares",
        "Tratamento de erros e versionamento",
        "Boas práticas de DTOs e validação",
      ],
      icon: Code2,
    },
    {
      title: "Módulo 5 — Banco de Dados (Postgres + Prisma)",
      hours: 8,
      bullets: [
        "Modelagem relacional e migrations",
        "Queries, relations e performance",
        "Seeds e transações",
      ],
      icon: Database,
    },
    {
      title: "Módulo 6 — Autenticação & Autorização",
      hours: 6,
      bullets: [
        "JWT (access/refresh), cookies e CORS",
        "RBAC/ABAC, senhas e hashing",
        "Boas práticas OWASP",
      ],
      icon: Shield,
    },
    {
      title: "Módulo 7 — Consumo de API & Estado no Front",
      hours: 6,
      bullets: [
        "Fetch/axios e controle de erros",
        "React Query (cache, revalidação, mutations)",
        "Paginação e filtros",
      ],
      icon: GitBranch,
    },
    {
      title: "Módulo 8 — Uploads, Jobs e Integrações",
      hours: 4,
      bullets: [
        "Uploads (streaming/multer) e emails",
        "Jobs assíncronos (BullMQ/Redis)",
        "Integrações externas",
      ],
      icon: PlugZap,
    },
    {
      title: "Módulo 9 — Documentação, DX & Contratos",
      hours: 4,
      bullets: [
        "OpenAPI/Swagger",
        "Coleções HTTP (Insomnia/Postman)",
        "Guides para consumidores",
      ],
      icon: FileCode,
    },
    {
      title: "Módulo 10 — Observabilidade",
      hours: 4,
      bullets: [
        "Logs estruturados e métricas",
        "Tracing (OpenTelemetry)",
        "Dashboards e alertas básicos",
      ],
      icon: Gauge,
    },
    {
      title: "Módulo 11 — Docker & Deploy",
      hours: 6,
      bullets: [
        "Dockerfile multi-stage e Compose",
        "Variáveis de ambiente e secrets",
        "Deploy: Vercel/Render/Fly/railway*",
      ],
      icon: TerminalSquare,
    },
    {
      title: "Módulo 12 — Projeto Integrador",
      hours: 8,
      bullets: [
        "Do design ao deploy com CI/CD",
        "Autenticação, cache, uploads e docs",
        "Apresentação e publicação final",
      ],
      icon: Rocket,
    },
  ];

  const plan = [
    { week: "Semana 1", topic: "Visão full-stack, setup e Git", deliverable: "Repo monorepo/multi com checklist" },
    { week: "Semana 2", topic: "Frontend: base React e roteamento", deliverable: "SPA com rotas e layout" },
    { week: "Semana 3", topic: "Formulários, validação e UX", deliverable: "Form com validação e feedback" },
    { week: "Semana 4", topic: "Estilos com Tailwind e componentes", deliverable: "Página responsiva e acessível" },
    { week: "Semana 5", topic: "Backend Express: rotas e erros", deliverable: "API com endpoints CRUD e erros mapeados" },
    { week: "Semana 6", topic: "Postgres/Prisma: modelagem e seeds", deliverable: "Schema relacional + migrations + seeds" },
    { week: "Semana 7", topic: "Auth (JWT) e autorização (RBAC)", deliverable: "Fluxo login/refresh + rotas protegidas" },
    { week: "Semana 8", topic: "React Query e consumo de API", deliverable: "Lista/Detalhe com cache e paginação" },
    { week: "Semana 9", topic: "Uploads, emails e jobs", deliverable: "Upload + email transacional + fila" },
    { week: "Semana 10", topic: "Docs (OpenAPI) e observabilidade", deliverable: "Swagger navegável + logs/métricas" },
    { week: "Semana 11", topic: "Docker, envs e deploy", deliverable: "Stack dockerizada + preview deploy" },
    { week: "Semana 12", topic: "Projeto integrador (capstone)", deliverable: "Entrega final publicada + apresentação" },
  ];

  const totalHours = modules.reduce((acc, m) => acc + m.hours, 0);

  return (
    <section className="w-full bg-gray-950 text-white">
      {/* HERO */}
      <header className="relative isolate">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-800 p-6 sm:p-10 ring-1 ring-white/10 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-emerald-50/90">
                <Globe className="h-4 w-4" aria-hidden />
                Trilha Profissional Full-Stack
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">
                Full-Stack — do banco ao pixel final
              </h1>
              <p className="max-w-3xl text-base sm:text-lg text-emerald-50/95">
                Construa uma aplicação completa, com frontend em React, backend
                em Node/Express, banco PostgreSQL/Prisma, testes, observabilidade
                e deploy com Docker e CI/CD.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-emerald-50/95">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-5 w-5" aria-hidden />
                  {totalHours}h totais (12 semanas)
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="h-5 w-5" aria-hidden />
                  Intermediário · Turmas reduzidas
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-teal-800 transition"
                >
                  <Zap className="h-5 w-5" />
                  Matricule-se
                </NavLink>
                <a
                  href="#site-main"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-950/20 text-white px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-emerald-950/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-teal-800 transition"
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
                Das bases de UI ao domínio do servidor e banco — integrando
                tudo em um produto publicável e observável.
              </p>
            </header>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {learningOutcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-emerald-300" aria-hidden />
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
                  Devs que buscam visão ponta-a-ponta (React + Node/DB + Deploy)
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Pré-requisitos</dt>
                <dd className="text-sm text-gray-100 text-right">
                  JS/TS básico e noções de HTTP/REST
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Metodologia</dt>
                <dd className="text-sm text-gray-100 text-right">
                  Aulas práticas, desafios guiados e capstone
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
                    <div className="rounded-xl bg-emerald-500/20 ring-1 ring-white/10 p-2">
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
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-300 shrink-0" aria-hidden />
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
            Quer dominar o fluxo completo e publicar seu produto? Garanta sua vaga e finalize o capstone em produção.
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
