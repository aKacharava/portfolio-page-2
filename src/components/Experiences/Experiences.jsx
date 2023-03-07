import { useState } from "react";
import "./Experiences.css";
import Experience from "./Experience/Experience";

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
  const [toggleTab, setToggleTab] = useState(3);

  function togglePanelDisplay(index) {
    setToggleTab(index);
  }

  return (
    <section className="experience" id="experience">
      <h2 className="heading">My Experiences</h2>
      <div className="inner">
        <div className="jobs-button-list" role="tablist" aria-label="Job tabs">
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
            pannelId="panel-3"
            className={toggleTab === 3 ? "job-panel active" : "job-panel"}
            title="Junior/Medior Web Developer"
            companyLink="https://coddin.nl/"
            company="Coddin"
            companyDate="April 2023 - Present"
            listItems={muzeItems}
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
            listItems={muzeItems}
          />
          <Experience
            pannelId="panel-0"
            className={toggleTab === 0 ? "job-panel active" : "job-panel"}
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
