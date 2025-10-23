import About from "../components/HomeComponents/About";
import AccentLine from "../components/AccentLine";
import Hero from "../components/HeroPresentation";
import Courses from "../components/HomeComponents/Courses";

export default function Home() {
  return (
    <>
      <section id="codi">
        <Hero />
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
