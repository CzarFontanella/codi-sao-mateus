// BackendCourse.tsx
import {
  Database,
  Server,
  Shield,
  KeyRound,
  Globe,
  Boxes,
  TerminalSquare,
  PlugZap,
  FileCode,
  BugPlay,
  Gauge,
  Rocket,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Zap,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function BackEnd() {
  const navigate = useNavigate();

  const goToMatricula = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    navigate(href, { state: { scrollToId: "site-main" } });
  };

  const learningOutcomes = [
    "Construir APIs REST escaláveis com Node.js e Express",
    "Modelar dados com PostgreSQL e Prisma (migrations, seeds)",
    "Autenticação e autorização seguras (JWT/OAuth2, RBAC)",
    "Testes automatizados com Jest/Supertest e qualidade contínua",
    "Observabilidade: logs estruturados, métricas e tracing",
    "Deploy com Docker, Compose e CI/CD (pipeline do zero)",
  ];

  const modules = [
    {
      title: "Módulo 1 — Fundamentos & Ambiente",
      hours: 4,
      bullets: [
        "Node.js, npm/pnpm, TypeScript no backend",
        "Padrões HTTP, REST e status codes",
        "Estrutura de projeto e scripts NPM",
      ],
      icon: Server,
    },
    {
      title: "Módulo 2 — Express & Camada Web",
      hours: 8,
      bullets: [
        "Rotas, controladores e middlewares",
        "Tratamento de erros e DTOs",
        "Paginação, filtros e versionamento de API",
      ],
      icon: Globe,
    },
    {
      title: "Módulo 3 — PostgreSQL & Prisma",
      hours: 8,
      bullets: [
        "Modelagem relacional e migrations",
        "Prisma Client, relations e performance",
        "Seeds, transações e repositorios",
      ],
      icon: Database,
    },
    {
      title: "Módulo 4 — Autenticação & Segurança",
      hours: 8,
      bullets: [
        "JWT, refresh tokens e expiração",
        "RBAC/ABAC, rate limit e CORS",
        "Criptografia, hashing e OWASP Top 10",
      ],
      icon: Shield,
    },
    {
      title: "Módulo 5 — Testes & Qualidade",
      hours: 6,
      bullets: [
        "Jest/Vitest e Supertest (HTTP e unidade)",
        "Mocks, factories e coverage",
        "CI inicial com execução de testes",
      ],
      icon: BugPlay,
    },
    {
      title: "Módulo 6 — Uploads, Tarefas & Serviços",
      hours: 4,
      bullets: [
        "Uploads (streaming/multer) e emails transacionais",
        "Jobs assíncronos com fila (BullMQ/Redis)",
        "Integração com serviços externos",
      ],
      icon: PlugZap,
    },
    {
      title: "Módulo 7 — Cache & Escalabilidade",
      hours: 6,
      bullets: [
        "Cache de leitura/escrita com Redis",
        "Invalidação e estratégias (TTL, cache keys)",
        "Concorrência, pooling e limites",
      ],
      icon: Boxes,
    },
    {
      title: "Módulo 8 — Documentação & DX",
      hours: 4,
      bullets: [
        "OpenAPI/Swagger e contract-first",
        "Coleções HTTP (Insomnia/Postman)",
        "Guides e exemplos para consumidores",
      ],
      icon: FileCode,
    },
    {
      title: "Módulo 9 — Observabilidade",
      hours: 4,
      bullets: [
        "Logs estruturados (Pino/Winston)",
        "Métricas e tracing (OpenTelemetry)",
        "Dashboards e alertas básicos",
      ],
      icon: Gauge,
    },
    {
      title: "Módulo 10 — Docker & CI/CD",
      hours: 6,
      bullets: [
        "Dockerfile multi-stage e Compose",
        "Variáveis de ambiente e secrets",
        "Pipeline: build, test, release e deploy",
      ],
      icon: TerminalSquare,
    },
    {
      title: "Módulo 11 — Arquitetura & Boas Práticas",
      hours: 4,
      bullets: [
        "Clean Architecture, SOLID e camadas",
        "Mapeamento de erros de domínio",
        "Observabilidade aplicada à arquitetura",
      ],
      icon: KeyRound,
    },
    {
      title: "Módulo 12 — Projeto Integrador",
      hours: 8,
      bullets: [
        "API completa com autenticação e documentação",
        "Integrações, cache e jobs assíncronos",
        "Publicação e apresentação final",
      ],
      icon: Rocket,
    },
  ];

  const plan = [
    { week: "Semana 1", topic: "Fundamentos HTTP/REST, setup Node/TS", deliverable: "Repo + endpoint de saúde" },
    { week: "Semana 2", topic: "Express: rotas, middlewares e erros", deliverable: "Módulo de usuários (CRUD)" },
    { week: "Semana 3", topic: "PostgreSQL/Prisma: modelagem e migrations", deliverable: "Relacional pronto + seeds" },
    { week: "Semana 4", topic: "Autenticação (JWT) e autorização (RBAC)", deliverable: "Fluxo login/refresh protegido" },
    { week: "Semana 5", topic: "Testes (unidade/integração) e cobertura", deliverable: "CI rodando testes" },
    { week: "Semana 6", topic: "Uploads, emails e serviços externos", deliverable: "Upload + email transacional" },
    { week: "Semana 7", topic: "Cache com Redis e invalidações", deliverable: "Endpoints com cache e TTL" },
    { week: "Semana 8", topic: "OpenAPI/Swagger e DX para consumidores", deliverable: "Documentação navegável" },
    { week: "Semana 9", topic: "Observabilidade: logs, métricas e tracing", deliverable: "Logs estruturados + traces" },
    { week: "Semana 10", topic: "Docker & Compose, variáveis e secrets", deliverable: "Stack dockerizada local" },
    { week: "Semana 11", topic: "CI/CD e arquitetura limpa", deliverable: "Pipeline: build/test/release" },
    { week: "Semana 12", topic: "Projeto integrador (capstone)", deliverable: "Deploy final + apresentação" },
  ];

  const totalHours = modules.reduce((acc, m) => acc + m.hours, 0); // 70h

  return (
    <section className="w-full bg-gray-950 text-white">
      {/* HERO */}
      <header className="relative isolate">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-800 p-6 sm:p-10 ring-1 ring-white/10 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white/90">
                <Server className="h-4 w-4" aria-hidden />
                Trilha Profissional Back End
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">
                Back End — APIs escaláveis com Node, Postgres e Docker
              </h1>
              <p className="max-w-3xl text-base sm:text-lg text-white/95">
                Do desenho da API ao deploy: Express, PostgreSQL/Prisma,
                autenticação robusta, testes, observabilidade e pipeline de
                entrega contínua.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-white/95">
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-cyan-800 transition"
                >
                  <Zap className="h-5 w-5" />
                  Matricule-se
                </NavLink>
                <a
                  href="#site-main"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-900/20 text-white px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-cyan-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-cyan-800 transition"
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
                Construa APIs robustas e seguras, com testes, observabilidade e
                deploy profissional usando Docker e CI/CD.
              </p>
            </header>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {learningOutcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 mt-0.5 shrink-0 text-sky-300"
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
                  Devs que querem dominar APIs com Node/TS
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Pré-requisitos</dt>
                <dd className="text-sm text-gray-100 text-right">
                  JS/TS básico e HTTP essencial
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Metodologia</dt>
                <dd className="text-sm text-gray-100 text-right">
                  Aulas práticas, TDD leve e projeto integrador
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
                    <div className="rounded-xl bg-sky-400/20 ring-1 ring-white/10 p-2">
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
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-sky-300 shrink-0" aria-hidden />
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
          <h2 id="plano" className="text-xl sm:text-2xl font-semibold mb-4">
            Plano de ensino (cronograma)
          </h2>
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10">
                <thead className="bg-white/5">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300"
                    >
                      Semana
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300"
                    >
                      Tema
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300"
                    >
                      Entrega/Avaliação
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-white/0">
                  {plan.map((row) => (
                    <tr key={row.week} className="hover:bg-white/[0.03]">
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-100">
                        {row.week}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-100">
                        {row.topic}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-300">
                        {row.deliverable}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-white/5">
                  <tr>
                    <td
                      className="px-4 py-3 text-sm font-semibold text-gray-100"
                      colSpan={3}
                    >
                      Carga horária total: {totalHours}h · Critérios de
                      aprovação: participação + entregas semanais + projeto
                      final (nota ≥ 7.0)
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
            Pronto para publicar APIs de verdade com segurança e performance?
            Garanta sua vaga e conclua seu projeto integrador em produção.
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
