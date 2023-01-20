import './Projects.css'
import projectImg from '../../assets/img/logo.png'
import Project from './Project/Project'

const projectTechMuze = [
  { id: 1, content: "JavaScript (ES6+)" },
  { id: 2, content: "React" },
  { id: 3, content: "Vue.js" },
  { id: 3, content: "Node.js" },
]

function Projects() {
  return (
    <section className="projects">
      <h2 className="heading">Some stuff I've built</h2>
      <ul>
        <Project
          url="https://example.com/"
          title="first"
          description="FOO BAAR BAZ"
          tech={projectTechMuze}
          githubUrl="https://example.com/"
          imgSrc={projectImg}
        />
        <Project
          url="https://example.com/"
          title="second"
          description="FOO BAAR BAZ"
          tech={projectTechMuze}
          githubUrl="https://example.com/"
          imgSrc={projectImg}
        />
        <Project
          url="https://example.com/"
          title="third"
          description="FOO BAAR BAZ"
          tech={projectTechMuze}
          githubUrl="https://example.com/"
          imgSrc={projectImg}
        />
      </ul>
    </section>
  );
}

export default Projects