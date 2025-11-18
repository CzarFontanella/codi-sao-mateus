// Ingles.tsx
import {
  Brain,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Zap,
  Globe,
  Ear,
  Speech,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Ingles() {
  const navigate = useNavigate();

  const goToMatricula = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    navigate(href, { state: { scrollToId: "site-main" } });
  };

  const tempoCurso = "3 meses";
  const modalidade = {
    presencial: "1x na semana (2h)",
    online: "Flexível",
  };

  const accent = "from-red-500 to-red-900"; // <- seu accent

  const learningOutcomes = [
    "Dominar vocabulário técnico usado no dia a dia de desenvolvedores e em entrevistas.",
    "Falar com pronúncia mais natural e reduzir erros comuns de comunicação oral.",
    "Escrever com clareza usando estruturas gramaticais aplicadas à comunicação técnica.",
    "Compreender áudios autênticos de tecnologia e identificar sotaques e velocidade natural.",
    "Preparar-se para entrevistas internacionais: fases, respostas e destaque de habilidades.",
    "Conectar fundamentos técnicos (algoritmos, estruturas de dados) à comunicação em inglês em entrevistas.",
  ];

  const modules = [
    {
      title: "Módulo 1 — Vocabulário Técnico Essencial",
      hours: 10,
      bullets: [
        "Verbos de ação e frases nominais comuns em tecnologia.",
        "Phrasal verbs, modificadores e expressões idiomáticas usadas no ambiente profissional.",
        "Termos técnicos para descrever arquiteturas, processos e entregas.",
      ],
      icon: Brain,
    },
    {
      title: "Módulo 2 — Gramática Aplicada à Comunicação",
      hours: 10,
      bullets: [
        "Tempos verbais relevantes a relatos técnicos e apresentações.",
        "Voz passiva vs ativa, estrutura paralela e colocação de modificadores.",
        "Construção de respostas claras e objetivas para documentos e entrevistas.",
      ],
      icon: BookOpen,
    },
    {
      title: "Módulo 3 — Pronúncia e Fala Natural",
      hours: 10,
      bullets: [
        "Prática de connected speech e redução natural em frases.",
        "Terminações -ED, stress de palavras e entonação em explicações técnicas.",
        "Exercícios para corrigir erros comuns de pronúncia e ganhar fluência.",
      ],
      icon: Speech,
    },
    {
      title: "Módulo 4 — Listening com Conteúdos Reais de Tecnologia",
      hours: 10,
      bullets: [
        "Áudios autênticos (vídeos, podcasts e trechos técnicos) para exposição real.",
        "Compreensão de sotaques, velocidade natural e vocabulário atual.",
        "Estratégias para extrair informações-chave de áudios técnicos.",
      ],
      icon: Ear,
    },
    {
      title: "Módulo 5 — Preparação para Entrevistas em Inglês",
      hours: 10,
      bullets: [
        "Fases de uma entrevista internacional e o que recrutadores procuram.",
        "Técnicas para destacar realizações, explicar projetos e responder perguntas difíceis.",
        "Simulações de entrevistas com feedback direcionado.",
      ],
      icon: Globe,
    },
  ];

  const totalHours = modules.reduce((acc, m) => acc + m.hours, 0); // 60h

  return (
    <section className="w-full bg-gray-950 text-white">
      {/* HERO */}
      <header className="relative isolate">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          <div
            className={`rounded-2xl bg-gradient-to-r ${accent} p-6 sm:p-10 ring-1 ring-white/10 overflow-hidden`}
          >
            <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white/90">
                <Globe className="h-4 w-4" aria-hidden />
                Trilha Profissional — Inglês Técnico para Desenvolvedores
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">
                Inglês para Programadores
              </h1>
              <p className="max-w-3xl text-base sm:text-lg text-white/95">
                Domine o inglês técnico aplicado à tecnologia: vocabulário,
                gramática para comunicação clara, pronúncia, compreensão oral
                com conteúdos reais e preparação para entrevistas
                internacionais. Tudo pensado para você se destacar no mercado
                global.
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
                  Material incluso e simulações de entrevista
                </span>
              </div>

              <div className="mt-2 flex flex-wrap gap-3">
                <NavLink
                  to="/matricula"
                  onClick={(e) => goToMatricula(e, "/matricula")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-red-900 transition"
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
                Conteúdo prático e focado: linguagem técnica, pronúncia,
                listening com materiais atuais e preparação específica para
                processos seletivos internacionais.
              </p>
            </header>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {learningOutcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 mt-0.5 shrink-0 text-red-300"
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
                  Curso certificado pelo MEC
                  <br />
                  Emissão após aprovação (≥ 60%)
                </dd>
              </div>
            </dl>

            <div className="mt-6 border-t border-white/5 pt-4 text-sm text-gray-300">
              <p className="mt-2">
                Preparação prática para o mercado: ênfase em entrevistas
                técnicas e comunicação profissional.
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
                    <div className="rounded-xl bg-red-400/20 ring-1 ring-white/10 p-2">
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
                          className="h-4 w-4 mt-0.5 text-red-300 shrink-0"
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
            Pronto para elevar seu inglês técnico e conquistar vagas
            internacionais? Garanta sua vaga e treine com simulações reais de
            entrevistas.
          </p>
          <NavLink
            to="/matricula"
            onClick={(e) => goToMatricula(e, "/matricula")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-6 py-3.5 text-base font-semibold ring-1 ring-white/10 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-red-900 transition"
          >
            <Zap className="h-5 w-5" />
            Matricule-se agora
          </NavLink>
        </section>
      </main>
    </section>
  );
}
