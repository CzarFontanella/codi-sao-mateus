import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Infrastructure = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const infrastructureData: Infrastructure[] = [
  {
    id: 1,
    title: "Sala de Aula 1",
    description:
      "Ambiente moderno e equipado com tecnologia de ponta para aulas de programação, desenvolvimento web e mobile.",
    image: "/img/sala1.jpg",
  },
  {
    id: 2,
    title: "Sala de Aula 2",
    description:
      "Espaço colaborativo e confortável projetado para práticas em grupo, workshops e projetos em equipe.",
    image: "/img/sala2.jpg",
  },
  {
    id: 3,
    title: "Cantina",
    description:
      "Área equipada com todo o necessario para refeições, alêm da oferta de alguns produtos, proporcionando um ambiente agradável para pausas.",
    image: "/img/cantina.jpg",
  },
  {
    id: 4,
    title: "Quadro de Estudos",
    description:
      "Espaço dedicado para apresentação de teoria, organização visual de projetos e didáticas colaborativas, favorecendo o aprofundamento em conceitos técnicos.",
    image: "/img/quadro.jpg",
  },
  {
    id: 5,
    title: "Estúdio de Gravação",
    description:
      "Ambiente profissional equipado para a criação de conteúdo em vídeo e aberto ao uso dos alunos, incentivando a produção de projetos audiovisuais.",
    image: "/img/estudio.jpg",
  },
  {
    id: 6,
    title: "Escritório da Magic Software",
    description:
      "Ambiente profissional onde os alunos contratados têm a oportunidade de vivenciar o dia a dia do mercado de trabalho em tecnologia.",
    image: "/img/magic-software.jpg",
  },
];

export default function InfrastructureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % infrastructureData.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex, isAutoplay]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + infrastructureData.length) % infrastructureData.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % infrastructureData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const current = infrastructureData[currentIndex];

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-black/40 to-black/20 text-white overflow-hidden">
      {/* Glow decorativo */}
      <div
        className="pointer-events-none absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[1000px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(600px 300px at center, rgba(162,67,210,0.4), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2 animate-[fadeInUp_0.6s_ease_0s_both]">
            Nossa <span className="text-[#A243D2]">Infraestrutura</span>
          </h2>
          <p className="text-white/60 text-lg animate-[fadeInUp_0.6s_ease_60ms_both]">
            Conheça um pouco do espaço que preparamos para seu aprendizado
          </p>
        </div>

        {/* Carrossel Principal */}
        <div className="relative rounded-2xl overflow-hidden group">
          {/* Container da imagem com fade */}
          <div className="relative h-[400px] sm:h-[500px] bg-black/20">
            <img
              key={current.id}
              src={current.image}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover animate-[fadeIn_0.8s_ease_0s_both]"
            />

            {/* Overlay degradado */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Conteúdo de texto sobre a imagem */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-2 animate-[fadeInUp_0.6s_ease_200ms_both]">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base text-white/80 max-w-2xl animate-[fadeInUp_0.6s_ease_280ms_both]">
                {current.description}
              </p>
            </div>
          </div>

          {/* Botões de navegação - Esquerda */}
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setIsAutoplay(false)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Botões de navegação - Direita */}
          <button
            onClick={goToNext}
            onMouseEnter={() => setIsAutoplay(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicadores/Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {infrastructureData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-[#A243D2]"
                  : "w-2 h-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Indicador de posição */}
        <p className="text-center text-white/60 mt-4 text-sm">
          {currentIndex + 1} / {infrastructureData.length}
        </p>
      </div>
    </section>
  );
}
