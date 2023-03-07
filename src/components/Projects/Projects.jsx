import './Projects.css'
import projectImg from '../../assets/img/logo.png'
import volkorenTv from "../../assets/img/projects/volkorentv.png";
import Project from './Project/Project'

const projectTechMuze = [
  { id: 1, content: "JavaScript (ES6+)" },
  { id: 2, content: "React" },
  { id: 3, content: "Vue.js" },
  { id: 3, content: "Node.js" },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Some stuff I've built</h2>
      <ul>
        <Project
          url="https://example.com/"
          title="first"
          tech={projectTechMuze}
          githubUrl="https://example.com/"
          imgSrc={volkorenTv}
        >
          A platform where you can check out videos from the Dutch and Flemish
          choral world. From classical chorus to modern acapella groups, you can
          find it all on <a href="https://volkoren.tv/">VolKoren.tv</a>.
        </Project>
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