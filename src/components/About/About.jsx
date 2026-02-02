import "./About.css";
import profile from "../../../img/profile-pic.jpg";

import List from "../List/List";
import { experiences } from "../../data/experiences.js";

const listItems = [
  { id: 1, content: "Payload CMS" },
  { id: 2, content: "Next.js" },
  { id: 3, content: "CloudCannon" },
  { id: 4, content: "Tailwind CSS" },
  { id: 5, content: "Astro" },
  { id: 6, content: "TypeScript" },
];

function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">About Me</h2>
      <div className="about-inner">
        <div className="about-img-container">
          <div className="about-img-wrapper">
            <div>
              <div>
                <img src={profile} alt="profile image" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-text-container">
          <div>
            <p>
              Hello! My name is Alex and I enjoy creating things that live on
              the internet. My interest in web development started back in 2016
              when I decided to try programming for the first time — turns out
              hacking together a custom webpage (With terrible color
              combinations) taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at a{" "}
              <a href="https://www.muze.nl/" target="_blank">
                a web agency
              </a>
              ,{" "}
              <a href="https://www.coddin.nl/" target="_blank">
                software & application company
              </a>{" "}
              and a{" "}
              <a href="https://cube.nl/" target="_blank">
                digital agency
              </a>
              {". "}
              My main focus these days is building accessible, inclusive
              products and digital experiences at{" "}
              <a href={experiences[0].link} target="_blank">
                {experiences[0].name}
              </a>{" "}
              for a variety of clients.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <List className="about-text-list" listItems={listItems} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
