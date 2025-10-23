import { ArrowRight, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";

type HeroProps = {
  title?: string;
  highlight?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function HeroPresentation({
  title = "Programe o seu",
  highlight = "Futuro",
  subtitle = "Nossa missão é transformar vidas ao capacitar entusiastas de tecnologia para se tornarem profissionais de alta excelência, prontos para atender às demandas do mercado de TI.",
  ctaLabel = "Explorar Cursos",
  ctaHref = "/courses",
}: HeroProps) {
  const accent = "#A243D2";

  return (
    <section className="relative isolate overflow-hidden bg-gray-950 text-white">
      {/* Glow decorativo de fundo */}
      <div
        className="pointer-events-none absolute -z-10 left-1/2 top-[-140px] h-[520px] w-[1200px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(600px 220px at center, rgba(162,67,210,0.5), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Badge/etiqueta */}
        <div className="inline-flex items-center gap-2 rounded-xl ring-1 ring-white/10 px-3 py-1.5 bg-gradient-to-r from-white/5 to-white/[0.03] animate-[fadeIn_0.6s_ease_0s_both]">
          <Sparkles className="w-4 h-4 text-white/80" />
          <span className="text-sm font-semibold text-white/80">
            Bem-vindo à Codi Academy
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-5 text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] animate-[fadeInUp_0.6s_ease_60ms_both]">
          {title} <span className="text-[#A243D2]">{highlight}</span>
          <span className="block text-white/90">na Codi São Mateus</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/70 animate-[fadeInUp_0.6s_ease_120ms_both]">
          {subtitle}
        </p>

        {/* Ações */}
        <div className="mt-8 flex flex-wrap items-center gap-3 animate-[fadeInUp_0.6s_ease_180ms_both]">
          <NavLink
            to={ctaHref}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            style={{ backgroundColor: accent }}
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </NavLink>

          <NavLink
            to="/about"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold ring-1 ring-white/10 bg-white/5 hover:bg-white/10"
          >
            Conheça a Codi
          </NavLink>
        </div>
      </div>

      {/* Linha de destaque inferior (opcional) */}
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #A243D2 20%, #7C3AED 50%, #A243D2 80%, transparent)",
        }}
      />
    </section>
  );
}

/* 
  ANIMAÇÕES UTILITÁRIAS
  Adicione no seu CSS global (ex.: src/index.css) para usar fadeIn/fadeInUp:
  
  @keyframes fadeIn {
    from { opacity: 0 }
    to { opacity: 1 }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(8px) }
    to { opacity: 1; transform: translateY(0) }
  }
*/
