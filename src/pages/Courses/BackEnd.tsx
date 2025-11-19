// BackendCourse.tsx
import {
  Database,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Zap,
  Brain,
  Bot,
  Braces,
  Hexagon,
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

  const tempoCurso = "6 meses";
  const modalidade = {
    intensivo: "1x na semana (3h)",
    extensivo: "2x na semana (2h)",
    online: "Flexível",
  };

  const learningOutcomes = [
    "Desenvolver lógica e algoritmos em C, Python e C#.",
    "Programar aplicações backend e automações.",
    "Criar projetos de Inteligência Artificial com Python.",
    "Construir APIs modernas com Node.js.",
    "Gerenciar bancos de dados SQL e MongoDB.",
    "Aplicar conhecimentos em projetos práticos completos.",
  ];

  const modules = [
    {
      title: "Módulo 1 — Algoritmos com C",
      hours: 30,
      bullets: [
        "Desenvolver raciocínio lógico e base em programação.",
        "Aprender estruturas de controle, variáveis e funções em C.",
        "Criar algoritmos do zero para resolver problemas.",
      ],
      icon: Brain,
    },
    {
      title: "Módulo 2 — Lógica com Python & C#",
      hours: 30,
      bullets: [
        "Dominar lógica de programação aplicável em múltiplas linguagens.",
        "Aprender Python e C# para backend, automação e scripts.",
        "Criar soluções práticas e programáveis com diferentes sintaxes.",
      ],
      icon: Braces,
    },
    {
      title: "Módulo 3 — Inteligência Artificial",
      hours: 30,
      bullets: [
        "Criar projetos de IA usando Python.",
        "Desenvolver automações, análise de dados e modelos inteligentes.",
        "Implementar agentes e soluções baseadas em inteligência artificial.",
      ],
      icon: Bot,
    },
    {
      title: "Módulo 4 — Node JS",
      hours: 30,
      bullets: [
        "Construir APIs modernas com Node.js, Express e Fastify.",
        "Integrar aplicações com múltiplos serviços e endpoints.",
        "Aprender práticas de backend escalável e manutenção de código.",
      ],
      icon: Hexagon,
    },
    {
      title: "Módulo 5 — Bancos de Dados Estruturados & Não Estruturados",
      hours: 30,
      bullets: [
        "Trabalhar com SQL e MongoDB, criando queries e modelagens.",
        "Integrar bancos de dados a aplicações via Prisma e Mongoose.",
        "Dominar gestão de dados estruturados e não estruturados.",
      ],
      icon: Database,
    },
    {
      title: "Módulo 6 — Práticas",
      hours: 30,
      bullets: [
        "Aplicar conhecimentos em projetos completos combinando linguagens e frameworks.",
        "Criar integrações Node+SQL, Node+Prisma, Node+Mongo e mais.",
        "Desenvolver soluções práticas e funcionais para problemas reais.",
      ],
      icon: BookOpen,
    },
  ];

  const totalHours = modules.reduce((acc, m) => acc + m.hours, 0); // 70h

  return (
    <section className="w-full text-white overflow-x-hidden">
      {/* HERO */}
      <header className="relative isolate">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-800 p-6 sm:p-10 ring-1 ring-white/10 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white/90">
                <Database className="h-4 w-4" aria-hidden />
                Trilha Profissional — Back End
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">
                Back End — APIs escaláveis com Node, Postgres e Docker
              </h1>
              <p className="max-w-3xl text-base sm:text-lg text-white/95">
                Programação e IA: de Algoritmos em C a Python, C#, Inteligência
                Artificial aplicada e backend com Node.js, Prisma, SQL, MongoDB
                e Express. Ideal para quem quer dominar do zero à prática com
                projetos reais.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-white/95">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-5 w-5" aria-hidden />
                  {totalHours}h totais
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="h-5 w-5" aria-hidden />
                  Intermediário
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
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
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
                <dt className="text-sm">Carga horária</dt>
                <dd className="text-sm text-gray-100 text-right">
                  {totalHours} horas
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Tempo de curso</dt>
                <dd className="text-sm text-gray-100 text-right">
                  {tempoCurso}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Modalidade</dt>
                <dd className="text-sm text-gray-100 text-right">
                  Intensivo: {modalidade.intensivo}
                  <br />
                  Extensivo: {modalidade.extensivo}
                  <br />
                  Online: {modalidade.online}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Certificado</dt>
                <dd className="text-sm text-gray-100 text-right">
                  Reconhecido pelo MEC — emissão após aprovação (≥ 60%)
                </dd>
              </div>
            </dl>

            <div className="mt-6 border-t border-white/5 pt-4 text-sm text-gray-300">
              <p className="mt-2">
                Eleita melhor escola de tecnologia de Juiz de Fora em 2022,
                2023, 2024 e 2025 (Instituto Idealize)
              </p>
            </div>
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
                        <CheckCircle2
                          className="h-4 w-4 mt-0.5 text-sky-300 shrink-0"
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
      </div>
    </section>
  );
}
