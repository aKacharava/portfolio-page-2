import './Main.css'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Experience from '../../components/Experience/Experience'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'

function Main(){
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main