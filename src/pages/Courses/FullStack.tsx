// FullstackCourse.tsx
import {
  Layers,
  Palette,
  Database,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Zap,
  Brain,
  Braces,
  Pyramid,
  Bot,
  SquareFunction,
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

  const tempoCurso = "12 meses";
  const modalidade = {
    intensivo: "1x na semana (3h)",
    extensivo: "2x na semana (2h)",
    online: "Flexível",
  };

  const learningOutcomes = [
    "Desenvolver lógica e algoritmos em C#, Python e JavaScript.",
    "Programar aplicações backend e automações com Node.js e Python.",
    "Criar projetos de Inteligência Artificial aplicando Python.",
    "Construir APIs modernas e eficientes com Node.js e Express.",
    "Gerenciar bancos de dados SQL e MongoDB de forma prática.",
    "Aplicar conhecimentos em projetos completos combinando frontend, backend e banco de dados.",
  ];

  const modules = [
    {
      title: "Módulo 1 — Introdução ao Desenvolvimento Web",
      hours: 50,
      bullets: [
        "Aprender HTML e CSS para estruturar e estilizar páginas.",
        "Utilizar Flexbox para criar layouts modernos e responsivos.",
        "Desenvolver páginas interativas do zero.",
      ],
      icon: Brain,
    },
    {
      title: "Módulo 2 — Lógica de Programação com JavaScript",
      hours: 50,
      bullets: [
        "Dominar lógica de programação e estruturas do JavaScript.",
        "Manipular DOM, eventos e APIs.",
        "Criar projetos práticos do básico ao avançado.",
      ],
      icon: SquareFunction,
    },
    {
      title: "Módulo 3 — Frameworks CSS & JS",
      hours: 60,
      bullets: [
        "Aprender React, Vue.js para desenvolvimento de interfaces.",
        "Utilizar Bootstrap e Tailwind para estilização eficiente.",
        "Criar interfaces modernas, dinâmicas e responsivas.",
      ],
      icon: Palette,
    },
    {
      title: "Módulo 4 — Python & Inteligência Artificial",
      hours: 50,
      bullets: [
        "Aprender fundamentos de programação em Python.",
        "Desenvolver soluções inteligentes com IA.",
        "Criar projetos práticos aplicando algoritmos e automações.",
      ],
      icon: Bot,
    },
    {
      title: "Módulo 5 — Lógica de Programação com C#",
      hours: 50,
      bullets: [
        "Aprender programação estruturada e raciocínio lógico.",
        "Desenvolver aplicações práticas com C#.",
        "Aplicar lógica em projetos funcionais e escaláveis.",
      ],
      icon: Braces,
    },
    {
      title: "Módulo 6 — Node.js + Prisma + Express",
      hours: 50,
      bullets: [
        "Construir APIs modernas e eficientes com Node.js e Express.",
        "Integrar bancos de dados usando Prisma.",
        "Aplicar boas práticas de desenvolvimento backend.",
      ],
      icon: Pyramid,
    },
    {
      title: "Módulo 7 — Bancos de Dados Estruturados e Não Estruturados",
      hours: 50,
      bullets: [
        "Trabalhar com SQL e MongoDB de forma prática.",
        "Criar consultas, modelagens e integrações com aplicações.",
        "Gerenciar dados estruturados e não estruturados com eficiência.",
      ],
      icon: Database,
    },
  ];

  const totalHours = modules.reduce((acc, m) => acc + m.hours, 0);

  return (
    <section className="w-full text-white overflow-x-hidden">
      {/* HERO */}
      <header className="relative isolate">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-800 p-6 sm:p-10 ring-1 ring-white/10 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white/90">
                <Layers className="h-4 w-4" aria-hidden />
                Trilha Profissional — Full-Stack
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">
                Full-Stack — do banco ao pixel final
              </h1>
              <p className="max-w-3xl text-base sm:text-lg text-emerald-50/95">
                Torne-se um programador fullstack com Python, JavaScript e C#
                nesse curso completo. Além de aprender as mais modernas
                ferramentas de IA que estão revolucionando o mercado de
                programação e tecnologia.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-emerald-50/95">
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-teal-800 transition"
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
                Das bases de UI ao domínio do servidor e banco — integrando tudo
                em um produto publicável e observável.
              </p>
            </header>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {learningOutcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 mt-0.5 shrink-0 text-emerald-300"
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
                        <CheckCircle2
                          className="h-4 w-4 mt-0.5 text-emerald-300 shrink-0"
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
            Quer dominar o fluxo completo e publicar seu produto? Garanta sua
            vaga e finalize o capstone em produção.
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
