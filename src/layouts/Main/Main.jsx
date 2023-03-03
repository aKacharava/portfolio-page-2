import "./Main.css";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Experiences from "../../components/Experiences/Experiences";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

function Main() {
  return (
    <main>
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
