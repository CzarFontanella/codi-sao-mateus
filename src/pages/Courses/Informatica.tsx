// InformaticaCourse.tsx
import React from "react";
import {
  Cpu,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Shield,
  FileText,
  Zap,
  Bot,
  Palette,
  Projector,
  TableProperties,
  Brain,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Informatica() {
  const navigate = useNavigate();

  const goToMatricula = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    navigate(href, { state: { scrollToId: "site-main" } });
  };

  // Conteúdo retirado da imagem — informações do curso
  const tempoCurso = "6 meses";
  const modalidade = {
    presencial: "1x na semana (2h)",
    online: "Flexível",
  };

  const learningOutcomes = [
    "Dominar Windows e organização de arquivos",
    "Produzir documentos profissionais (Word)",
    "Criar e analisar planilhas (Excel)",
    "Desenvolver apresentações (PowerPoint)",
    "Criar sites com HTML, CSS e JavaScript",
    "Conceitos e prática em Inteligência Artificial com Python",
  ];

  // Módulos ajustados para totalizar 96h e cobrir o conteúdo da imagem
  const modules = [
    {
      title: "Módulo 1 — Fundamentos da Informática",
      hours: 12,
      bullets: [
        "Tópicos em Sistema Operacional (Windows) e configurações iniciais",
        "Hardware x Software, periféricos e interfaces",
        "Acessibilidade, atalhos e personalização",
      ],
      icon: Brain,
    },
    {
      title: "Módulo 2 — Documentos e Textos (Word)",
      hours: 12,
      bullets: [
        "Formatação, estilos, modelos e exportação para PDF",
        "Cabeçalhos, sumário, referências e revisão colaborativa",
        "Boas práticas para documentos profissionais",
      ],
      icon: FileText,
    },
    {
      title: "Módulo 3 — Planilhas (Excel) Básico ao Intermediário",
      hours: 16,
      bullets: [
        "Estrutura de tabelas, fórmulas essenciais e funções",
        "Gráficos, filtros, validação e dashboards simples",
        "Exportação, impressão e layout de relatórios",
      ],
      icon: TableProperties,
    },
    {
      title: "Módulo 4 — Apresentações (PowerPoint)",
      hours: 12,
      bullets: [
        "Design limpo, hierarquia visual e tipografia",
        "Modelos, transições, animações e apresentações remotas",
        "Storytelling e técnicas de oratória",
      ],
      icon: Projector,
    },
    {
      title: "Módulo 5 — Criação de Sites (HTML, CSS, JS)",
      hours: 16,
      bullets: [
        "Estrutura HTML e semântica",
        "Estilos com CSS: layout responsivo e tipografia",
        "JavaScript básico para interatividade",
      ],
      icon: Palette,
    },
    {
      title: "Módulo 6 — Internet Segura e Produtividade",
      hours: 16,
      bullets: [
        "Navegadores, extensões e boas práticas de privacidade",
        "E-mail profissional, agendas e colaboração",
        "Segurança: senhas, 2FA, phishing e golpes comuns",
      ],
      icon: Shield,
    },
    {
      title: "Módulo 7 — Inteligência Artificial com Python",
      hours: 12,
      bullets: [
        "Conceitos básicos de IA e fluxos de trabalho",
        "Criação de agentes simples com Python",
        "Aplicações práticas e ética em IA",
      ],
      icon: Bot,
    },
  ];

  // garante que mostre 96 (se necessário use cargaHoraria direto)
  const totalHours = modules.reduce((acc, m) => acc + m.hours, 0);

  return (
    <section className="w-full bg-gray-950 text-white">
      {/* HERO */}
      <header className="relative isolate">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          <div className="rounded-2xl bg-gradient-to-r from-lime-400 to-emerald-700 p-6 sm:p-10 ring-1 ring-white/10 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white/90">
                <Cpu className="h-4 w-4" aria-hidden />
                Certificação em Informática
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">
                Certificação em Informática — do zero à produtividade real
              </h1>
              <p className="max-w-3xl text-base sm:text-lg text-emerald-50/95">
                Aprenda a dominar o computador no dia a dia: organização de
                arquivos, documentos, planilhas, apresentações e internet
                segura. Conteúdo direto ao ponto com exercícios.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-emerald-50/95">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-5 w-5" aria-hidden />
                  {totalHours}h totais ({tempoCurso})
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="h-5 w-5" aria-hidden />
                  Iniciante
                </span>
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="h-5 w-5" aria-hidden />
                  Certificado reconhecido pelo MEC
                </span>
              </div>

              <div className="mt-2 flex flex-wrap gap-3">
                <NavLink
                  to="/matricula"
                  onClick={(e) => goToMatricula(e, "/matricula")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-emerald-700 transition"
                >
                  <Zap className="h-5 w-5" />
                  Matricule-se
                </NavLink>
                <a
                  href="#site-main"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-900/20 text-white px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-emerald-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-emerald-700 transition"
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
        {/* Visão geral / O que você vai aprender */}
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
                Conteúdos práticos e modernos para ampliar suas habilidades
                digitais e valorizar seu currículo.
              </p>
            </header>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {learningOutcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 mt-0.5 shrink-0 text-emerald-400"
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
            Módulos do curso ({totalHours}h)
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
                          className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0"
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
            Pronto para obter a certificação e aumentar sua competitividade no
            mercado? Garanta sua vaga!
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
