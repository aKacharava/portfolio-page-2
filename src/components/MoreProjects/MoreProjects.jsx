import './MoreProjects.css'
import MoreProjectsItem from './MoreProjectsItem/MoreProjectsItem'

const vistaGalleryTech = [
  {
    id: 1,
    content: "React",
  },
  {
    id: 2,
    content: "JavaScript (ES6+)",
  },
  {
    id: 3,
    content: "Firebase",
  },
  {
    id: 4,
    content: "Sass",
  },
];

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
    content: "JavaScript (ES6+)",
  }
];

const itWebDesignTech = [
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

function MoreProjects (){
  return (
    <section className="more-projects" id="more-projects">
      <h2>Other projects I made</h2>
      <ul className="more-projects-grid">
        <MoreProjectsItem
          title="Handstand, one of my most recent work with SimplyEdit"
          githubUrl=""
          url="https://www.vanuithandstand.nl/"
          description="My first time being a professional developer and I get to work with an in-house built CMS(SimplyEdit) at Muze. This is the first project I worked on and it turned out pretty cool."
          listItems={handstandTech}
        />
        <MoreProjectsItem
          title="An attempt to a gallery app"
          url="https://vista-gallery.akdev.nl/"
          githubUrl="https://github.com/aKacharava/vista-gallery"
          description="This is one of those projects that I wanted to try out with a framework I was learning(React) and a database(Firebase). This was a fun project to start of with in React, because it taught me to use a familiar concept in a somewhat unfamiliar method for me."
          listItems={vistaGalleryTech}
        />
        <MoreProjectsItem
          title="A Super Awesome RPG"
          url="https://simmer.io/@AKacharva/super-awesome-rpg"
          githubUrl="https://github.com/aKacharava/super-awesome-rpg"
          description="Back when I took an interest in game development, I always wanted to know how one is being made. So, I took on my C# skills and made this game in Unity! Also, I created a character in Blender for curiosity sake."
          listItems={superRpgTech}
        />
        <MoreProjectsItem
          title="A mock portfolio platform"
          url="https://portfolio-platform.akdev.nl/"
          githubUrl="https://github.com/aKacharava/portfolio-platform"
          description="Here, I wanted to further develop my CSS skills by creating a mock platform where people have their portfolios on."
          listItems={portfolioPlatformTech}
        />
        <MoreProjectsItem
          title="My first attempt to HTML, CSS, JavaScript"
          githubUrl="https://github.com/aKacharava/webdesign_page"
          url="https://itweb.akdev.nl/index.html"
          description="This was one of my first serious attempts to create a responsive website in HTML, CSS, JavaScript. This is a project that taught me the concept of 'Responsive Web Design' and further solidified my skills in CSS"
          listItems={itWebDesignTech}
        />
      </ul>
    </section>
  );
}

export default MoreProjects