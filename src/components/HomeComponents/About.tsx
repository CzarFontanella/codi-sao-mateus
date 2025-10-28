import {
  Building2,
  Target,
  ShieldCheck,
  Users,
  Rocket,
  Award,
  Sparkles,
  Globe,
  GraduationCap,
  Code2,
  Server,
  LineChart,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import AccentLine from "../AccentLine";

export default function About() {
  const accent = "#A243D2";

  const values = [
    {
      icon: ShieldCheck,
      title: "Qualidade sem atalhos",
      desc: "Conteúdo revisado por especialistas, com padrões de mercado e foco em entregáveis reais.",
    },
    {
      icon: Users,
      title: "Aprendizado em comunidade",
      desc: "Mentorias, fóruns e grupos para acelerar sua evolução e ampliar seu networking.",
    },
    {
      icon: Rocket,
      title: "Carreira em primeiro lugar",
      desc: "Projetos, portfólio e orientação prática para conquistar oportunidades.",
    },
    {
      icon: Award,
      title: "Excelência contínua",
      desc: "Feedbacks constantes, trilhas atualizadas e compromisso com resultados.",
    },
  ];

  const stats = [
    { label: "Alunos formados", value: "5.000+" },
    { label: "Taxa de satisfação", value: "97%" },
    { label: "Parcerias com empresas", value: "120+" },
    { label: "Projetos publicados", value: "8.500+" },
  ];

  const pillars = [
    {
      icon: GraduationCap,
      title: "Mentoria de verdade",
      bullets: [
        "Acompanhamento próximo em cada módulo",
        "Sessões de revisão de código",
        "Correção guiada de desafios",
      ],
    },
    {
      icon: Code2,
      title: "Mão na massa",
      bullets: [
        "Projetos reais desde a primeira semana",
        "Stack moderna e práticas atuais",
        "Repositórios prontos para portfólio",
      ],
    },
    {
      icon: Server,
      title: "Do front ao deploy",
      bullets: [
        "Integração com APIs e banco de dados",
        "Conceitos de cloud e CI/CD",
        "Boas práticas e observabilidade",
      ],
    },
    {
      icon: LineChart,
      title: "Carreira & Soft Skills",
      bullets: [
        "Preparação para entrevistas",
        "Dinâmicas e code challenges",
        "Networking e vitrine de talentos",
      ],
    },
  ];

  return (
    <main id="site-main" className="bg-gray-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[1200px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(600px 200px at center, rgba(162,67,210,0.5), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/10 px-3 py-1.5 bg-gradient-to-r from-white/5 to-white/[0.03]">
              <Building2 className="w-5 h-5 text-white/80" />
              <span className="font-semibold text-white/80">Sobre nós</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
              Transformamos aprendizado em <span className="text-[#A243D2]">carreira</span>
            </h1>
            <p className="mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-white/70">
              A Codi Academy é uma escola de tecnologia focada em prática, mentoria e
              projetos reais. Nossa missão é acelerar sua evolução e abrir portas no
              mercado de trabalho.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <NavLink
                to="/enroll"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                style={{ backgroundColor: accent }}
              >
                Começar agora
                <ArrowRight className="w-4 h-4" />
              </NavLink>
              <NavLink
                to="/courses"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold ring-1 ring-white/10 bg-white/5 hover:bg-white/10"
              >
                Ver cursos
              </NavLink>
            </div>

            {/* badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-white/60">
              <span className="inline-flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Alunos no Brasil e no exterior
              </span>
              <span className="opacity-40">•</span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Projetos do zero ao deploy
              </span>
            </div>
          </div>
        </div>

        {/* linha de destaque */}
        <div
          className="mt-10 h-[2px] w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #A243D2 20%, #7C3AED 50%, #A243D2 80%, transparent)",
          }}
        />
      </section>

      {/* VALORES (cards com accent sólida) */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/10 px-3 py-1.5 bg-gradient-to-r from-white/5 to-white/[0.03]">
              <Target className="w-5 h-5 text-white/80" />
              <span className="font-semibold text-white/80">Nossos valores</span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
              O que guia nossa jornada
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <article
                  key={v.title}
                  className="group relative isolate rounded-2xl hover:shadow-2xl hover:shadow-black/40 transition-shadow"
                >
                  {/* glow */}
                  <div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(162,67,210,0.35), rgba(124,58,237,0.35))",
                    }}
                    aria-hidden="true"
                  />
                  {/* card */}
                  <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] h-full">
                    <div className="h-1 w-full" style={{ backgroundColor: accent }} />
                    <div className="p-6 flex flex-col h-full">
                      <div className="inline-flex w-fit items-center justify-center rounded-xl ring-1 ring-white/10 bg-white/5 p-3 mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">{v.title}</h3>
                      <p className="mt-2 text-sm text-white/70">{v.desc}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="py-6 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 text-center"
              >
                <div className="text-2xl sm:text-3xl font-semibold text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
            <AccentLine />
      {/* COMO ENSINAMOS (pilares) */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/10 px-3 py-1.5 bg-gradient-to-r from-white/5 to-white/[0.03]">
              <BookOpen className="w-5 h-5 text-white/80" />
              <span className="font-semibold text-white/80">Como ensinamos</span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
              Metodologia orientada a projetos
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]"
                >
                  <div className="h-1 w-full" style={{ backgroundColor: accent }} />
                  <div className="p-6">
                    <div className="inline-flex w-fit items-center justify-center rounded-xl ring-1 ring-white/10 bg-white/5 p-3 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-white/80">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/40" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-3xl ring-1 ring-white/10 bg-gradient-to-r from-white/5 to-white/[0.03]">
            {/* glow */}
            <div
              className="absolute inset-0 -z-10 opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(600px 220px at 20% 50%, rgba(162,67,210,0.35), transparent 60%), radial-gradient(600px 220px at 80% 50%, rgba(124,58,237,0.35), transparent 60%)",
              }}
              aria-hidden="true"
            />
            <div className="px-6 py-10 sm:px-10 sm:py-14 text-center">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Pronto para dar o próximo passo?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
                Escolha sua trilha e comece hoje. Você terá apoio próximo, projetos
                práticos e um plano claro para alcançar seus objetivos.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <NavLink
                  to="/enroll"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  style={{ backgroundColor: accent }}
                >
                  Matricule-se Já
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
                <NavLink
                  to="/courses"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold ring-1 ring-white/10 bg-white/5 hover:bg-white/10"
                >
                  Ver todos os cursos
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
