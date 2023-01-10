import './Projects.css'
import Project from './Project/Project'

function Projects() {
  return (
    <section className="projects">
      <h2>Some stuff I've built</h2>
      <ul>
        <Project />
        <Project />
        <Project />
      </ul>
    </section>
  );
}

export default Projects