import { useState } from "react";
import "./Experiences.css";
import Experience from "./Experience/Experience";

const cubeItems = [
  {
    id: 1,
    content:
        "Write modern, performant and maintainable code for a diverse array of client and internal projects",
  },
  {
    id: 2,
    content:
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, PHP, Laravel, React, and Vue",
  },
  {
    id: 3,
    content:
        "Communicate with teams of engineers, designers and clients on a daily basis",
  },
];

const coddinItems = [
  {
    id: 1,
    content:
      "Write modern, performant and maintainable code for a diverse array of client and internal projects",
  },
  {
    id: 2,
    content:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, and Vue",
  },
  {
    id: 3,
    content:
      "Communicate with teams of engineers and clients on a daily basis",
  },
];

const muzeItems = [
  {
    id: 1,
    content:
      "Learned how to use different set of tools to create a wide variaty of products",
  },
  {
    id: 2,
    content:
      "Work with a small, but experienced, team of developers that create webapps",
  },
  {
    id: 3,
    content:
      "Interfaced with clients on a weekly basis, providing technological expertise",
  },
];

const mediafrisItems = [
  {
    id: 1,
    content:
      "Got an introduction to work with different kinds of branches in a company",
  },
  {
    id: 2,
    content:
      "The start-up where I created the WordPress theme for VolKoren.tv",
  },
  {
    id: 3,
    content:
      "Introduced a different workflow within the team",
  },
];

const recreateItems = [
  {
    id: 1,
    content:
      "The first internship where I experienced different types of developers",
  },
  {
    id: 2,
    content:
      "Got an introduction to Agile, learned how to work with Scrum and version control",
  },
  {
    id: 3,
    content:
      "Advanced my skills in HTML, CSS and JavaScript and also different concepts like classes, OOP, etc.",
  },
];

function Experiences() {
  const [toggleTab, setToggleTab] = useState(4);

  function togglePanelDisplay(index) {
    setToggleTab(index);
  }

  return (
    <section className="experience" id="experience">
      <h2 className="heading">My Experiences</h2>
      <div className="inner">
        <div className="jobs-button-list" role="tablist" aria-label="Job tabs">
          <button
              id="tab-4"
              className={toggleTab === 4 ? "job-button active" : "job-button"}
              role="tab"
              aria-controls="panel-4"
              onClick={() => togglePanelDisplay(4)}
          >
            <span>Cube</span>
          </button>
          <button
              id="tab-3"
              className={toggleTab === 3 ? "job-button active" : "job-button"}
              role="tab"
              aria-controls="panel-3"
              onClick={() => togglePanelDisplay(3)}
          >
            <span>Coddin</span>
          </button>
          <button
              id="tab-2"
              className={toggleTab === 2 ? "job-button active" : "job-button"}
              role="tab"
              aria-controls="panel-2"
              onClick={() => togglePanelDisplay(2)}
          >
            <span>Muze</span>
          </button>
          <button
              id="tab-1"
              className={toggleTab === 1 ? "job-button active" : "job-button"}
              role="tab"
              aria-controls="panel-1"
              onClick={() => togglePanelDisplay(1)}
          >
            <span>MediaFris</span>
          </button>
          <button
              id="tab-0"
              className={toggleTab === 0 ? "job-button active" : "job-button"}
              role="tab"
              aria-controls="panel-0"
              onClick={() => togglePanelDisplay(0)}
          >
            <span>Recreate</span>
          </button>
          <div className={"jobs-highlighted tab" + toggleTab}></div>
        </div>
        <div className="jobs-panel-list">
          <Experience
              pannelId="panel-4"
              className={toggleTab === 4 ? "job-panel active" : "job-panel"}
              title="Medior Web Developer"
              companyLink="https://cube.nl/"
              company="Cube"
              companyDate="May 2024 - Present"
              listItems={cubeItems}
          />
          <Experience
              pannelId="panel-3"
              className={toggleTab === 3 ? "job-panel active" : "job-panel"}
              title="Junior/Medior Web Developer"
              companyLink="https://coddin.nl/"
              company="Coddin"
              companyDate="April 2023 - April 2024"
              listItems={coddinItems}
          />
          <Experience
            pannelId="panel-2"
              className={toggleTab === 2 ? "job-panel active" : "job-panel"}
              title="Junior Web Developer"
              companyLink="https://www.muze.nl/"
              company="Muze"
              companyDate="September 2021 - March 2023"
              listItems={muzeItems}
          />
          <Experience
            pannelId="panel-1"
            className={toggleTab === 1 ? "job-panel active" : "job-panel"}
            title="Intern Front-end Developer"
            companyLink="https://mediafris.nl/"
            company="MediaFris"
            companyDate="September 2018 - January 2019"
            listItems={mediafrisItems}
          />
          <Experience
            pannelId="panel-0"
            className={toggleTab === 0 ? "job-panel active" : "job-panel"}
            title="Intern Front-end Developer"
            companyLink="https://recreate.nl/"
            company="Recreate"
            companyDate="September 2017 - January 2018"
            listItems={recreateItems}
          />
        </div>
      </div>
    </section>
  );
}

export default Experiences;
