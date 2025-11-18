// DataScienceCourse.tsx
import {
  ChartNoAxesCombined,
  Table2,
  BarChart3,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Zap,
  Brain,
  ChartSpline,
  Bot,
  SquareChartGantt,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function DataScience() {
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
    presencial: "1x na semana (3h)",
    online: "Flexível",
  };

  const learningOutcomes = [
    "Compreender os fundamentos da programação e da linguagem Python.",
    "Manipular, limpar e analisar grandes volumes de dados com ferramentas modernas.",
    "Aplicar estatística e técnicas de Machine Learning em projetos práticos.",
    "Extrair e integrar dados de APIs e sites com automação inteligente.",
    "Visualizar dados de forma clara e atraente para gerar insights estratégicos.",
    "Desenvolver soluções de Data Science e IA aplicadas ao mercado real.",
  ];

  const modules = [
    {
      title: "Módulo 1 — Fundamentos da Programação em Python",
      hours: 30,
      bullets: [
        "Aprenda os conceitos básicos da linguagem Python.",
        "Trabalhe com variáveis, operadores e estruturas de decisão e repetição.",
        "Domine coleções como listas, tuplas e dicionários.",
      ],
      icon: Brain,
    },
    {
      title: "Módulo 2 — Programação Orientada a Objetos (POO)",
      hours: 30,
      bullets: [
        "Entenda o funcionamento de funções e métodos em Python.",
        "Aplique os pilares da POO: classes, objetos e herança.",
        "Crie sistemas organizados com encapsulamento e polimorfismo.",
      ],
      icon: Table2,
    },
    {
      title: "Módulo 3 — Inteligência Artificial com Python",
      hours: 30,
      bullets: [
        "Use IA para gerar e otimizar códigos Python automaticamente.",
        "Crie bots com personalidades e trate erros de forma inteligente.",
        "Desenvolva projetos práticos, como um bot da Wikipedia.",
      ],
      icon: Bot,
    },
    {
      title: "Módulo 4 — Manipulação e Análise de Dados com Numpy e Pandas",
      hours: 30,
      bullets: [
        "Trabalhe com arrays e matrizes utilizando NumPy.",
        "Analise, limpe e agrupe dados com Pandas.",
        "Gere visualizações e relatórios a partir de dados reais.",
      ],
      icon: BarChart3,
    },
    {
      title: "Módulo 5 — Coleta e Integração de Dados (Web Scraping & APIs)",
      hours: 30,
      bullets: [
        "Extraia informações da web com Beautiful Soup.",
        "Acesse e converta dados de APIs em JSON e XML.",
        "Automatize processos de coleta e tratamento de dados.",
      ],
      icon: SquareChartGantt,
    },
    {
      title: "Módulo 6 — Estatística e Ciência de Dados Aplicada",
      hours: 30,
      bullets: [
        "Domine fundamentos de estatística e probabilidade.",
        "Aplique testes de hipótese, regressão e análise de clusters (K-Means, DBSCAN, HAC).",
        "Visualize dados com Seaborn e Bokeh para gerar insights estratégicos.",
      ],
      icon: ChartSpline,
    },
  ];

  const totalHours = modules.reduce((acc, m) => acc + m.hours, 0);

  return (
    <section className="w-full bg-gray-950 text-white">
      {/* HERO */}
      <header className="relative isolate">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 p-6 sm:p-10 ring-1 ring-white/10 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white/90">
                <ChartNoAxesCombined className="h-4 w-4" aria-hidden />
                Trilha Profissional — Data Science
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">
                Data Science — dados em ação, decisões melhores
              </h1>
              <p className="max-w-3xl text-base sm:text-lg text-amber-50/95">
                Python, análise, visualização e manipulação de dados com
                ferramentas modernas e dados reais. Prepare-se para transformar
                dados em insights valiosos e atuar no mercado.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-amber-50/95">
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-orange-600 transition"
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
                Do ETL com Pandas à modelagem preditiva e apresentação de
                resultados — com foco em impacto para o negócio.
              </p>
            </header>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {learningOutcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 mt-0.5 shrink-0 text-amber-300"
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
                  Presencial: {modalidade.presencial}
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
                    <div className="rounded-xl bg-amber-400/20 ring-1 ring-white/10 p-2">
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
                          className="h-4 w-4 mt-0.5 text-amber-300 shrink-0"
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
            Pronto para transformar dados em decisões? Garanta sua vaga e
            publique seu dashboard com insights reais.
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
