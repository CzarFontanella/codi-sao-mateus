// InformaticaCourse.tsx
import {
  Cpu,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Shield,
  HardDrive,
  MousePointerClick,
  FolderOpenDot,
  RefreshCcw,
  FileText,
  Zap,
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

  const learningOutcomes = [
    "Dominar o uso do sistema operacional (Windows) e organização de arquivos",
    "Produtividade no Office/LibreOffice: Documentos, Planilhas e Apresentações",
    "Navegação segura na web, boas práticas de privacidade e senhas",
    "E-mail profissional, agendas e boas práticas de comunicação",
    "Noções de armazenamento em nuvem (Drive/OneDrive) e backup",
    "Manutenção preventiva básica e resolução de problemas comuns",
  ];

  const modules = [
    {
      title: "Módulo 1 — Fundamentos do Computador",
      hours: 6,
      bullets: [
        "Hardware x Software, periféricos e interfaces",
        "Sistema Operacional (Windows) e configurações iniciais",
        "Atalhos essenciais, acessibilidade e personalização",
      ],
      icon: Cpu,
    },
    {
      title: "Módulo 2 — Organização de Arquivos",
      hours: 6,
      bullets: [
        "Estrutura de pastas, nomes e versões",
        "Compactação, formatos e boas práticas",
        "Backup local e em nuvem (Drive/OneDrive)",
      ],
      icon: FolderOpenDot,
    },
    {
      title: "Módulo 3 — Documentos e Textos (Editor)",
      hours: 8,
      bullets: [
        "Formatação, estilos, sumário e referências",
        "Modelos, cabeçalhos/rodapés e PDF",
        "Revisão, comentários e colaboração",
      ],
      icon: FileText,
    },
    {
      title: "Módulo 4 — Planilhas (Básico ao Intermediário)",
      hours: 10,
      bullets: [
        "Estrutura de tabelas, validação e filtros",
        "Fórmulas essenciais, gráficos e dashboards simples",
        "Exportação, impressão e layouts",
      ],
      icon: BookOpen,
    },
    {
      title: "Módulo 5 — Apresentações Eficientes",
      hours: 6,
      bullets: [
        "Design limpo, hierarquia visual e tipografia",
        "Modelos, animações e apresentações remotas",
        "Storytelling e boas práticas de oratória",
      ],
      icon: MousePointerClick,
    },
    {
      title: "Módulo 6 — Internet Segura e Produtividade",
      hours: 8,
      bullets: [
        "Navegadores, extensões e privacidade",
        "E-mail profissional, calendário e tarefas",
        "Segurança: senhas, 2FA, phishing e golpes comuns",
      ],
      icon: Shield,
    },
    {
      title: "Módulo 7 — Manutenção Básica & Troubleshooting",
      hours: 4,
      bullets: [
        "Limpeza, atualizações e desempenho",
        "Drivers, armazenamento e espaço em disco",
        "Diagnóstico: quando e como pedir ajuda",
      ],
      icon: HardDrive,
    },
  ];

  const plan = [
    { week: "Semana 1", topic: "Introdução, hardware x software e Windows básico", deliverable: "Checklist de ambientação" },
    { week: "Semana 2", topic: "Pastas, versões, compactação e backup em nuvem", deliverable: "Estrutura de pastas do aluno" },
    { week: "Semana 3", topic: "Documentos: formatação, estilos e modelos", deliverable: "Documento formatado com sumário" },
    { week: "Semana 4", topic: "Documentos: revisão, comentários e PDF", deliverable: "Relatório final em PDF" },
    { week: "Semana 5", topic: "Planilhas: tabelas, validação e filtros", deliverable: "Planilha de controle simples" },
    { week: "Semana 6", topic: "Planilhas: fórmulas e gráficos", deliverable: "Mini dashboard com 2 gráficos" },
    { week: "Semana 7", topic: "Apresentações: design e storytelling", deliverable: "Slide deck de 6–8 slides" },
    { week: "Semana 8", topic: "E-mail, calendário, tarefas e netiqueta", deliverable: "Agenda semanal integrada" },
    { week: "Semana 9", topic: "Navegação segura, 2FA, golpes e privacidade", deliverable: "Plano de segurança pessoal" },
    { week: "Semana 10", topic: "Manutenção básica e troubleshooting", deliverable: "Checklist de manutenção" },
    { week: "Semana 11", topic: "Projeto integrador — parte 1", deliverable: "Plano do projeto" },
    { week: "Semana 12", topic: "Projeto integrador — parte 2 e apresentação", deliverable: "Entrega final + apresentação" },
  ];

  const totalHours = modules.reduce((acc, m) => acc + m.hours, 0);

  return (
    <section className="w-full bg-gray-950 text-white">
      {/* HERO */}
      <header className="relative isolate">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          <div className="rounded-2xl bg-gradient-to-r from-lime-400 to-emerald-700 p-6 sm:p-10 ring-1 ring-white/10 overflow-hidden">
            <div className="relative z-10 flex flex-col gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-emerald-950/90">
                <RefreshCcw className="h-4 w-4" aria-hidden />
                Curso de Fundamentos Práticos
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">
                Informática — do zero à produtividade real
              </h1>
              <p className="max-w-3xl text-base sm:text-lg text-emerald-50/95">
                Aprenda a dominar o computador no dia a dia: organização de
                arquivos, documentos, planilhas, apresentações, internet segura
                e manutenção básica. Conteúdo direto ao ponto, com exercícios e
                um projeto integrador.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-emerald-50/95">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-5 w-5" aria-hidden />
                  {totalHours}h totais (12 semanas)
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="h-5 w-5" aria-hidden />
                  Iniciante · Turmas reduzidas
                </span>
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="h-5 w-5" aria-hidden />
                  Material e modelos inclusos
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
      <main id="site-main" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Visão geral / O que você vai aprender */}
        <section aria-labelledby="aprendizado" className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <article className="lg:col-span-2 rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 sm:p-8">
            <header className="mb-4">
              <h2 id="aprendizado" className="text-xl sm:text-2xl font-semibold">
                O que você vai aprender
              </h2>
              <p className="mt-2 text-gray-300">
                Conteúdos aplicados para aumentar sua independência digital e produtividade no trabalho e estudos.
              </p>
            </header>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {learningOutcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-emerald-400" aria-hidden />
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
                  Iniciantes e usuários que querem ganhar produtividade
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Pré-requisitos</dt>
                <dd className="text-sm text-gray-100 text-right">
                  Nenhum (apenas disposição para praticar)
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
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" aria-hidden />
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
            Pronto para ganhar independência digital e aumentar sua produtividade? Garanta sua vaga e comece ainda esta turma.
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
