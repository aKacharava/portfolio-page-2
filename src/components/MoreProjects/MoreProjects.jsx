import './MoreProjects.css'
import MoreProjectsItem from './MoreProjectsItem/MoreProjectsItem'

const superRpgTech = [
  {
    id: 1,
    content: "C#",
  },
  {
    id: 2,
    content: "Unity",
  },
  {
    id: 3,
    content: "Blender",
  },
];

const portfolioPlatformTech = [
  {
    id: 1,
    content: "HTML 5",
  },
  {
    id: 2,
    content: "CSS",
  },
  {
    id: 3,
    content: "JavaScript",
  },
];

const handstandTech = [
  {
    id: 1,
    content: "SimplyEdit",
  },
  {
    id: 2,
    content: "Javascript (ES6+)",
  }
];

function MoreProjects (){
  return (
    <section className="more-projects" id="more-projects">
      <h2>Other projects I made</h2>
      <ul className="more-projects-grid">
        <MoreProjectsItem
          title="A Super Awesome RPG"
          url="https://simmer.io/@AKacharva/super-awesome-rpg"
          githubUrl="https://github.com/aKacharava/super-awesome-rpg"
          description="Back when I took an interest in game development, I always wanted to know how one is being made. So, I took on my C# skills and made this game in Unity!"
          listItems={superRpgTech}
        />
        <MoreProjectsItem
          title="A mock portfolio platform"
          url="https://portfolio-platform.akdev.nl/"
          githubUrl="https://github.com/aKacharava/portfolio-platform"
          description="Here, I wanted to focus on my CSS skills by creating a platform where people have their portfolios on."
          listItems={portfolioPlatformTech}
        />
        <MoreProjectsItem
          title="Handstand, one of my most recent work with SimplyEdit"
          githubUrl=""
          url="https://www.vanuithandstand.nl/"
          description="My first time being a professional developer and I get to work with an in-house built CMS(SimplyEdit) at Muze. This is the first project I worked on and it turned out pretty cool."
          listItems={handstandTech}
        />
      </ul>
    </section>
  );
}

export default MoreProjects