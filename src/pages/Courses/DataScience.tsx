// DataScienceCourse.tsx
import {
  ChartNoAxesCombined,
  Database,
  Brain,
  Table2,
  PieChart,
  SigmaSquare,
  Wand2,
  BarChart3,
  LineChart,
  Gauge,
  TerminalSquare,
  Rocket,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Zap,
  FileSpreadsheet,
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

  const learningOutcomes = [
    "Construir pipelines de dados com Python (Pandas, NumPy) do zero",
    "Tratamento, limpeza e preparação de dados para análises confiáveis",
    "Visualizações efetivas com Matplotlib/Plotly e storytelling de dados",
    "Estatística prática: amostragem, hipóteses e inferência aplicada",
    "Machine Learning básico com scikit-learn (modelagem e avaliação)",
    "Publicar dashboards (Streamlit) e apresentar insights acionáveis",
  ];

  const modules = [
    {
      title: "Módulo 1 — Fundamentos & Ambiente",
      hours: 4,
      bullets: [
        "Python para dados: ambiente, virtualenv e notebooks",
        "Pensamento analítico e visão ponta-a-ponta",
        "Boas práticas de organização de projeto",
      ],
      icon: TerminalSquare,
    },
    {
      title: "Módulo 2 — NumPy & Pandas Essencial",
      hours: 8,
      bullets: [
        "Arrays, vetorização e operações eficientes",
        "DataFrames: seleção, merge, groupby e time series",
        "Leitura/escrita (CSV, Excel, Parquet)",
      ],
      icon: Table2,
    },
    {
      title: "Módulo 3 — Limpeza & Preparação de Dados",
      hours: 6,
      bullets: [
        "Qualidade de dados: nulos, outliers e tipos",
        "Feature engineering e transformação",
        "Pipelines reprodutíveis",
      ],
      icon: Wand2,
    },
    {
      title: "Módulo 4 — SQL para Análise",
      hours: 6,
      bullets: [
        "SELECT, JOINs, agregações e janelas",
        "Modelagem analítica e boas práticas",
        "Integração Python ↔ PostgreSQL",
      ],
      icon: Database,
    },
    {
      title: "Módulo 5 — Visualização & Storytelling",
      hours: 6,
      bullets: [
        "Matplotlib/Plotly: gráficos eficazes",
        "Design de dashboards e narrativas",
        "Erros comuns e como evitá-los",
      ],
      icon: BarChart3,
    },
    {
      title: "Módulo 6 — Estatística Aplicada",
      hours: 6,
      bullets: [
        "Exploração, correlação e distribuição",
        "Testes de hipótese e p-valor (na prática)",
        "Intervalos de confiança e amostragem",
      ],
      icon: SigmaSquare,
    },
    {
      title: "Módulo 7 — Machine Learning Básico",
      hours: 8,
      bullets: [
        "Workflow com scikit-learn (fit/predict)",
        "Modelos clássicos (regressão, árvore, KNN)",
        "Validação, métricas e overfitting",
      ],
      icon: Brain,
    },
    {
      title: "Módulo 8 — Model Tuning & Interpretação",
      hours: 6,
      bullets: [
        "Tuning (Grid/Random Search)",
        "Feature importance e SHAP (introdução)",
        "Boas práticas de avaliação",
      ],
      icon: Gauge,
    },
    {
      title: "Módulo 9 — Séries Temporais (Intro)",
      hours: 4,
      bullets: [
        "Sazonalidade e tendência",
        "Divisão temporal e métricas adequadas",
        "Modelos simples (baseline) e visão de forecast",
      ],
      icon: LineChart,
    },
    {
      title: "Módulo 10 — Dashboards & Entrega",
      hours: 6,
      bullets: [
        "Streamlit: app de dados do zero",
        "Publicação e boas práticas de UX",
        "Relatórios executivos",
      ],
      icon: FileSpreadsheet,
    },
    {
      title: "Módulo 11 — Ética, Viés & Comunicação",
      hours: 4,
      bullets: [
        "Privacidade, viés e uso responsável",
        "Como comunicar incerteza",
        "Design orientado ao negócio",
      ],
      icon: PieChart,
    },
    {
      title: "Módulo 12 — Projeto Integrador",
      hours: 8,
      bullets: [
        "Pipeline completo: ingestão → modelo → dashboard",
        "Métricas de sucesso do negócio",
        "Apresentação final com insights acionáveis",
      ],
      icon: Rocket,
    },
  ];

  const plan = [
    { week: "Semana 1", topic: "Setup, notebooks e visão analítica", deliverable: "Repo + notebook base" },
    { week: "Semana 2", topic: "NumPy/Pandas I: DataFrames e operações", deliverable: "ETL simples com Pandas" },
    { week: "Semana 3", topic: "Pandas II: merges, groupby e datas", deliverable: "Relatório exploratório (EDA)" },
    { week: "Semana 4", topic: "Limpeza e preparação de dados", deliverable: "Pipeline de limpeza reprodutível" },
    { week: "Semana 5", topic: "SQL para análise (Postgres)", deliverable: "Consultas e views analíticas" },
    { week: "Semana 6", topic: "Visualização e storytelling", deliverable: "Painel de gráficos (Plotly)" },
    { week: "Semana 7", topic: "Estatística aplicada", deliverable: "Teste de hipótese documentado" },
    { week: "Semana 8", topic: "ML básico com scikit-learn", deliverable: "Modelo baseline + métricas" },
    { week: "Semana 9", topic: "Tuning e interpretação", deliverable: "Relatório de tuning + SHAP (intro)" },
    { week: "Semana 10", topic: "Séries temporais (intro) e métricas", deliverable: "Baseline temporal + avaliação" },
    { week: "Semana 11", topic: "Streamlit e entrega executiva", deliverable: "Dashboard publicado (preview)" },
    { week: "Semana 12", topic: "Projeto integrador (capstone)", deliverable: "Entrega final + apresentação" },
  ];

  const totalHours = modules.reduce((acc, m) => acc + m.hours, 0);

  return (
    <section className="w-full bg-gray-950 text-white">
      {/* HERO */}
      <header className="relative isolate">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 p-6 sm:p-10 ring-1 ring-white/10 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-orange-950/90">
                <ChartNoAxesCombined className="h-4 w-4" aria-hidden />
                Trilha Profissional Data Science
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">
                Data Science — dados em ação, decisões melhores
              </h1>
              <p className="max-w-3xl text-base sm:text-lg text-amber-50/95">
                Domine o ciclo completo: coleta, preparação, análise, modelagem
                e comunicação de resultados em dashboards claros e úteis.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-amber-50/95">
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-orange-600 transition"
                >
                  <Zap className="h-5 w-5" />
                  Matricule-se
                </NavLink>
                <a
                  href="#site-main"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-900/20 text-white px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-orange-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-orange-600 transition"
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
                Do ETL com Pandas à modelagem preditiva e apresentação de
                resultados — com foco em impacto para o negócio.
              </p>
            </header>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {learningOutcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-amber-300" aria-hidden />
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
                  Analistas, iniciantes em DS e profissionais de negócio
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Pré-requisitos</dt>
                <dd className="text-sm text-gray-100 text-right">
                  Lógica básica e noções de planilhas/estatística ajudam
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Metodologia</dt>
                <dd className="text-sm text-gray-100 text-right">
                  Aulas práticas, estudos de caso e capstone
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
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-amber-300 shrink-0" aria-hidden />
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
            Pronto para transformar dados em decisões? Garanta sua vaga e publique seu dashboard com insights reais.
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
