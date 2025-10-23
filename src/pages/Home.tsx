import About from "../components/About";
import AccentLine from "../components/AccentLine";
import Codi from "../components/Codi";
import Courses from "../components/Courses";

export default function Home() {
  return (
    <>
      <section id="codi">
        <Codi />
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
