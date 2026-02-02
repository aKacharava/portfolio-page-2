import "./Projects.css";
import fuchsiaGradient from "../../../img/projects/fuschia-gradient.png";
import reactMeals from "../../../img/projects/reactmeals.png";
import Project from "./Project/Project";

const fuchsiaGradientTech = [
  { id: 1, content: "JavaScript (ES6+)" },
  { id: 2, content: "Vue.js" },
];

const reactMealsTech = [
  { id: 1, content: "JavaScript (ES6+)" },
  { id: 2, content: "React" },
  { id: 3, content: "Vite" },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Some stuff I've built</h2>
      <ul>
        <Project
          url="https://fuchsia-gradient.akforge.dev/"
          title="Fuchsia Gradient"
          tech={fuchsiaGradientTech}
          githubUrl="https://github.com/aKacharava/fuchsia-gradient"
          imgSrc={fuchsiaGradient}
        >
          <p>
            A color gradient editor where you can visually see different color
            gradients in action. Input different colors, lock them in and change
            the color gradient order in real time to your liking.
          </p>
        </Project>
        <Project
          url="https://reactmeals.akforge.dev/"
          title="ReactMeals"
          tech={reactMealsTech}
          githubUrl="https://github.com/aKacharava/react-foodapp"
          imgSrc={reactMeals}
        >
          <p>
            A mock food app that I made when I wanted to learn more about a
            shopping cart system. You can add, edit and delete meal items to the
            shopping cart with the amount you want and the cart will update in
            real time.
          </p>
          <p>
            After struggling with adding more of the same items in the cart
            without duplicates in the shopping cart list, I can say that I
            leanred a lot about React and my problem solving skills.
          </p>
        </Project>
      </ul>
    </section>
  );
}

export default Projects;
