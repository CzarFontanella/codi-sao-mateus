// IACourse.tsx
import {
  Bot,
  Brain,
  Sparkles,
  Workflow,
  Network,
  HardDrive,
  ServerCog,
  FileCode,
  Gauge,
  Shield,
  Rocket,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Zap,
  BookOpenCheck,
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
    "Aplicar Prompt Engineering com técnicas de estruturação, cadeia de raciocínio e ferramentas",
    "Integrar LLMs via SDKs/APIs (streaming, function/tool calling, segurança de chaves)",
    "Construir RAG na prática: embeddings, índices vetoriais e re-ranking",
    "Aprimorar modelos com fine-tuning leve (LoRA/adapters) e controle de custos",
    "Avaliar e monitorar qualidade (offline/online), segurança e guardrails",
    "Publicar aplicações de IA em produção com observabilidade e governança",
  ];

  const modules = [
    {
      title: "Módulo 1 — Fundamentos de IA Generativa & LLMs",
      hours: 4,
      bullets: [
        "Arquitetura de LLMs, tokens e context window",
        "Tipos de modelos: chat, text, vision, embeddings",
        "Ciclos de vida: protótipo → produção",
      ],
      icon: Brain,
    },
    {
      title: "Módulo 2 — Prompt Engineering na Prática",
      hours: 6,
      bullets: [
        "Instruções claras, persona, delimitadores e exemplos",
        "Chain-of-thought (seguro), self-consistency e decomposição",
        "Templates reutilizáveis e testes de prompts",
      ],
      icon: Sparkles,
    },
    {
      title: "Módulo 3 — SDKs & Integração por API",
      hours: 8,
      bullets: [
        "Requisições com streaming e timeouts",
        "Function/Tool Calling e esquemas (JSON)",
        "Segurança: secrets, quotas e políticas",
      ],
      icon: ServerCog,
    },
    {
      title: "Módulo 4 — Embeddings & Busca Semântica",
      hours: 6,
      bullets: [
        "Embeddings, normalização e similaridade",
        "Indexação vetorial e filtros",
        "Re-ranking e avaliação offline",
      ],
      icon: Network,
    },
    {
      title: "Módulo 5 — RAG (Retrieval-Augmented Generation)",
      hours: 8,
      bullets: [
        "Pipeline: chunking, storage e retrieval",
        "Context crafting e redução de alucinações",
        "RAG multimodal (visão/voz) — visão geral",
      ],
      icon: Workflow,
    },
    {
      title: "Módulo 6 — Fine-tuning & Adapters",
      hours: 6,
      bullets: [
        "LoRA/QLoRA e tuning focado em tarefas",
        "Datasets de instrução e limpeza",
        "Trade-offs: custo, qualidade e risco",
      ],
      icon: BookOpenCheck,
    },
    {
      title: "Módulo 7 — Avaliação & Guardrails",
      hours: 6,
      bullets: [
        "Métricas: precisão factual, utilidade, segurança",
        "Avaliação com juízes (LLM-as-a-judge) e goldens",
        "Guardrails: políticas, bloqueios e filtros",
      ],
      icon: Shield,
    },
    {
      title: "Módulo 8 — Agentes & Ferramentas",
      hours: 6,
      bullets: [
        "Agentes reativos vs. deliberativos",
        "Ferramentas: busca, DB, code exec, calendário",
        "Planejamento e limites de segurança",
      ],
      icon: FileCode,
    },
    {
      title: "Módulo 9 — Dados & Armazenamento para IA",
      hours: 6,
      bullets: [
        "Vetorização em massa e jobs",
        "Bases vetoriais (ex.: pgvector/FAISS)",
        "Versionamento de dados e auditoria",
      ],
      icon: HardDrive,
    },
    {
      title: "Módulo 10 — Performance, Custos & Deploy",
      hours: 6,
      bullets: [
        "Latência vs. contexto vs. custo",
        "Caching, batch e fallback de modelos",
        "Deploy: serverless/containers",
      ],
      icon: Gauge,
    },
    {
      title: "Módulo 11 — Observabilidade & Governança",
      hours: 6,
      bullets: [
        "Logs de prompts/respostas, traces e métricas",
        "Experimentos A/B e feature flags",
        "Políticas de privacidade e compliance",
      ],
      icon: BookOpen,
    },
    {
      title: "Módulo 12 — Projeto Integrador",
      hours: 8,
      bullets: [
        "Aplicação completa: RAG/Agente + avaliação",
        "Painel de monitoramento e custos",
        "Apresentação executiva",
      ],
      icon: Rocket,
    },
  ];

  const plan = [
    { week: "Semana 1", topic: "Fundamentos de LLMs e setup do projeto", deliverable: "Repo + check de ambientes" },
    { week: "Semana 2", topic: "Prompt Engineering aplicado", deliverable: "Playbook de prompts versionado" },
    { week: "Semana 3", topic: "SDKs/APIs, streaming e tool calling", deliverable: "Demo com função/tool" },
    { week: "Semana 4", topic: "Embeddings e busca semântica", deliverable: "Índice vetorial + avaliação offline" },
    { week: "Semana 5", topic: "RAG end-to-end", deliverable: "RAG funcional com contexto robusto" },
    { week: "Semana 6", topic: "Fine-tuning leve (LoRA/adapters)", deliverable: "Modelo ajustado + relatório de custo" },
    { week: "Semana 7", topic: "Avaliação e guardrails", deliverable: "Suite de avaliação + políticas ativas" },
    { week: "Semana 8", topic: "Agentes e ferramentas", deliverable: "Agente com 2+ ferramentas e limites" },
    { week: "Semana 9", topic: "Dados: pipelines e base vetorial", deliverable: "Ingestão em lote + versionamento" },
    { week: "Semana 10", topic: "Performance, custo e deploy", deliverable: "Deploy com cache/fallback" },
    { week: "Semana 11", topic: "Observabilidade e governança", deliverable: "Dash de métricas + playbook de incidentes" },
    { week: "Semana 12", topic: "Capstone e apresentação", deliverable: "Entrega final em produção + pitch" },
  ];

  const totalHours = modules.reduce((acc, m) => acc + m.hours, 0); // 76h

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
                IA — do prompt ao produto em produção
              </h1>
              <p className="max-w-3xl text-base sm:text-lg text-white/95">
                Construa aplicações de IA com LLMs: prompts avançados, RAG,
                agentes, avaliação, observabilidade e governança — prontas para operar.
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-blue-800 transition"
                >
                  <Zap className="h-5 w-5" />
                  Matricule-se
                </NavLink>
                <a
                  href="#site-main"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-900/20 text-white px-5 py-3 text-sm sm:text-base font-semibold ring-1 ring-white/10 hover:bg-blue-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 focus-visible:ring-offset-blue-800 transition"
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
                  Devs e analistas que querem levar IA ao ambiente produtivo
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-sm">Pré-requisitos</dt>
                <dd className="text-sm text-gray-100 text-right">
                  JS/Python básico e noções de HTTP/APIs
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
          <h2
            id="modulos"
            className="text-xl sm:text-2xl font-semibold mb-4"
          >
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
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-300 shrink-0" aria-hidden />
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
          <h2
            id="plano"
            className="text-xl sm:text-2xl font-semibold mb-4"
          >
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
