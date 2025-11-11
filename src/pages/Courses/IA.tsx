// IACourse.tsx
import {
  Bot,
  Brain,
  Sparkles,
  GraduationCap,
  SquareChartGantt,
  Cog,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Zap,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function IA() {
  const navigate = useNavigate();

  const goToMatricula = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    navigate(href, { state: { scrollToId: "site-main" } });
  };

  const learningOutcomes = [
    "O aluno compreenderá os fundamentos da IA e Prompt Engineering.",
    "Será capaz de criar soluções inteligentes com e sem código.",
    "Aprenderá a usar o Playground da OpenAI e integrar APIs com Python.",
    "Desenvolverá projetos reais de automação e geração de conteúdo.",
    "Aprimorará o raciocínio criativo e técnico em aplicações práticas.",
    "Estará pronto para apresentar projetos autorais a clientes e investidores.",
  ];

  const modules = [
    {
      title: "Módulo 1 — Fundamentos de IA & Prompt Engineering",
      hours: 12,
      bullets: [
        "Entenda o que é Inteligência Artificial Generativa e como ela funciona.",
        "Domine a arte de criar prompts eficazes para obter respostas precisas e criativas.",
        "Explore ferramentas como o ChatGPT e aprenda estratégias de interação avançada.",
      ],
      icon: Brain,
    },
    {
      title: "Módulo 2 — Criação de IA sem código",
      hours: 12,
      bullets: [
        "Crie suas próprias ferramentas de IA sem precisar programar.",
        "Utilize o Playground da OpenAI para gerar textos, imagens, áudios e chatbots.",
        "Desenvolva soluções profissionais com interfaces simples e resultados impressionantes.",
      ],
      icon: Sparkles,
    },
    {
      title: "Módulo 3 — IA com Código",
      hours: 12,
      bullets: [
        "Aprenda os fundamentos essenciais de Python aplicados à Inteligência Artificial.",
        "Conecte seus projetos à API da OpenAI e automatize tarefas com IA.",
        "Desenvolva aplicações reais como geradores de texto, imagens e assistentes inteligentes.",
      ],
      icon: Cog,
    },
    {
      title: "Módulo 4 — Projetos Práticos Guiados",
      hours: 12,
      bullets: [
        "Aplique seus conhecimentos em projetos reais e supervisionados.",
        "Desenvolva ferramentas úteis como analisadores financeiros e criadores de contratos.",
        "Crie soluções criativas como geradores de memes e consultores de currículo com IA.",
      ],
      icon: SquareChartGantt,
    },
    {
      title: "Módulo 5 — Projeto Original",
      hours: 12,
      bullets: [
        "Crie um projeto autoral com orientação direta do professor.",
        "Transforme sua ideia em um case prático de mercado.",
        "Apresente seu projeto para potenciais clientes e investidores reais.",
      ],
      icon: GraduationCap,
    },
  ];

  const totalHours = modules.reduce((acc, m) => acc + m.hours, 0); // 60h

  return (
    <section className="w-full bg-gray-950 text-white">
      {/* HERO */}
      <header className="relative isolate">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-800 p-6 sm:p-10 ring-1 ring-white/10 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white/90">
                <Bot className="h-4 w-4" aria-hidden />
                Trilha Profissional — Inteligência Artificial
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">
                IA — do prompt ao produto
              </h1>
              <p className="max-w-3xl text-base sm:text-lg text-white/95">
                Prepare-se para atuar com as ferramentas mais avançadas de IA
                Generativa em um curso 100% prático. Você vai aprender desde os
                fundamentos de IA e engenharia de prompts, passando por criação
                de IAs sem código com OpenAI Premium, até desenvolvimento com
                Python e API da OpenAI. No final, você sai com projetos reais no
                portfólio e um projeto final apresentado como case profissional.
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-blue-800 transition"
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
                Da prototipação com prompts ao RAG e agentes — com avaliação,
                observabilidade e controle de custos para execução real.
              </p>
            </header>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {learningOutcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 mt-0.5 shrink-0 text-indigo-300"
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
                  Devs e analistas que querem levar IA ao ambiente produtivo.
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Pré-requisitos</dt>
                <dd className="text-sm text-gray-100 text-right">
                  Conhecimentos básicos de informática e noções de lógica.
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Metodologia</dt>
                <dd className="text-sm text-gray-100 text-right">
                  Aulas práticas e estudos de caso.
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
                    <div className="rounded-xl bg-indigo-400/20 ring-1 ring-white/10 p-2">
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
                          className="h-4 w-4 mt-0.5 text-indigo-300 shrink-0"
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
            Pronto para transformar ideias em produtos de IA confiáveis? Garanta
            sua vaga e publique seu capstone com avaliação e métricas reais.
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
