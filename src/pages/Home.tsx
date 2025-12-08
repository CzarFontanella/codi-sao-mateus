import About from "../components/HomeComponents/About";
import AccentLine from "../components/AppComponents/AccentLine";
import Hero from "../components/HomeComponents/HeroPresentation";
import Courses from "../components/HomeComponents/Courses";
import InfrastructureCarousel from "../components/HomeComponents/InfrastructureCarousel";

export default function Home() {
  return (
    <>
      <section id="codi">
        <Hero />
      </section>
      <AccentLine />
      <section id="infrastructure">
        <InfrastructureCarousel />
      </section>
      <AccentLine />
      <section id="courses">
        <Courses />
      </section>
      <AccentLine />
      <section id="about">
        <About />
      </section>
    </>
  );
}
