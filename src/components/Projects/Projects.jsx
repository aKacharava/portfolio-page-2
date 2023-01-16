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
          overline="first"
          url="https://brittanychiang.com/"
          title="Test"
          description="FOO BAAR BAZ"
          tech={projectTechMuze}
          imgSrc={projectImg}
        />
        <Project
          overline="second"
          url="https://brittanychiang.com/"
          title="Test"
          description="FOO BAAR BAZ"
          tech={projectTechMuze}
          imgSrc={projectImg}
        />
        <Project
          overline="third"
          url="https://brittanychiang.com/"
          title="Test"
          description="FOO BAAR BAZ"
          tech={projectTechMuze}
          imgSrc={projectImg}
        />
      </ul>
    </section>
  );
}

export default Projects