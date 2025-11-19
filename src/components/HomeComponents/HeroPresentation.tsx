import { Sparkles } from "lucide-react";

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
}: HeroProps) {

  return (
    <section className="relative isolate overflow-hidden text-white">
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
      </div>
    </section>
  );
}