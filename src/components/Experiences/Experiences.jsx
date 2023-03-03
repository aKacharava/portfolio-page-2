import "./Experiences.css";
import Experience from "./Experience/Experience";
import { useState } from "react";

const muzeItems = [
  {
    id: 1,
    content:
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
  },
  {
    id: 2,
    content:
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
  },
  {
    id: 3,
    content:
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
  },
];

function Experiences() {
  //const [isPanelHidden, setIsPanelHidden] = useState(false);
  //const [isTabSelected, setIsTabSelected] = useState(true);

  const allTabs = document.querySelectorAll('.job-button[role="tab"]');

  function togglePanelDisplay() {
    const allTabs = document.querySelector('.job-button[role="tab"]');
  }

  return (
    <section className="experience" id="experience">
      <h2 className="heading">My Experiences</h2>
      <div className="inner">
        <div className="jobs-button-list" role="tablist" aria-label="Job tabs">
          <button
            id="tab-3"
            className="job-button active"
            role="tab"
            tabIndex="0"
            aria-selected="true"
            aria-controls="panel-3"
          >
            <span>Coddin</span>
          </button>
          <button
            id="tab-2"
            className="job-button"
            role="tab"
            tabIndex="-1"
            aria-selected="false"
            aria-controls="panel-2"
          >
            <span>Muze</span>
          </button>
          <button
            id="tab-1"
            className="job-button"
            role="tab"
            tabIndex="-1"
            aria-selected="false"
            aria-controls="panel-1"
          >
            <span>MediaFris</span>
          </button>
          <button
            id="tab-0"
            className="job-button"
            role="tab"
            tabIndex="-1"
            aria-selected="false"
            aria-controls="panel-0"
          >
            <span>Recreate</span>
          </button>
        </div>
        <div className="jobs-panel-list">
          <Experience
            pannelId="panel-3"
            className="job-panel active"
            labelledBy="tab-3"
            selected="true"
            hidden="false"
            tabIndex="0"
            title="Junior/Medior Web Developer"
            companyLink="https://coddin.nl/"
            company="Coddin"
            companyDate="April 2023 - Present"
            listItems={muzeItems}
          />
          <Experience
            pannelId="panel-2"
            className="job-panel"
            labelledBy="tab-2"
            selected="false"
            hidden="true"
            tabIndex="-1"
            title="Junior Web Developer"
            companyLink="https://www.muze.nl/"
            company="Muze"
            companyDate="September 2021 - March 2023"
            listItems={muzeItems}
          />
          <Experience
            pannelId="panel-1"
            className="job-panel"
            labelledBy="tab-1"
            selected="false"
            hidden="true"
            tabIndex="-1"
            title="Intern Front-end Developer"
            companyLink="https://mediafris.nl/"
            company="MediaFris"
            companyDate="September 2018 - January 2019"
            listItems={muzeItems}
          />
          <Experience
            pannelId="panel-0"
            className="job-panel"
            labelledBy="tab-0"
            selected="false"
            hidden="true"
            tabIndex="-1"
            title="Intern Front-end Developer"
            companyLink="https://recreate.nl/"
            company="Recreate"
            companyDate="September 2017 - January 2018"
            listItems={muzeItems}
          />
        </div>
      </div>
    </section>
  );
}

export default Experiences;
