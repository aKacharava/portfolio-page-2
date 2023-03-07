import "./Main.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Experiences from "../../components/Experiences/Experiences";
import Projects from "../../components/Projects/Projects";
import MoreProjects from "../../components/MoreProjects/MoreProjects";
import Contact from "../../components/Contact/Contact";

function Main() {
  return (
    <main>
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <MoreProjects />
      <Contact />
    </main>
  );
}

export default Main;
