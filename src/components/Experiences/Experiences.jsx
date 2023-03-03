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
  function togglePanelDisplay(element) {
    const allTabs = document.querySelector(".jobs-button-list").childNodes;
    const allPanels = document.querySelector(".jobs-panel-list").childNodes;
    const currentElement = element.target.offsetParent;
    const tabControlId = currentElement.attributes[5].value;
    const tabPan = document.querySelector("#" + tabControlId);
    
    // Deselect all tabs
    allTabs.forEach((tab)=>{
      tab.classList.remove("active");
    });

    // Hide all panels
    allPanels.forEach((panel) => {
      panel.classList.remove("active");
    });

    currentElement.classList.add("active");
    tabPan.classList.add("active");
  }

  return (
    <section className="experience" id="experience">
      <h2 className="heading">My Experiences</h2>
      <div className="inner">
        <div className="jobs-button-list" role="tablist" aria-label="Job tabs">
          <button
            id="tab-3"
            className="job-button active"
            onClick={togglePanelDisplay}
          >
            <span>Coddin</span>
          </button>
          <button
            id="tab-2"
            className="job-button"
            onClick={togglePanelDisplay}
          >
            <span>Muze</span>
          </button>
          <button
            id="tab-1"
            className="job-button"
            onClick={togglePanelDisplay}
          >
            <span>MediaFris</span>
          </button>
          <button
            id="tab-0"
            className="job-button"
            onClick={togglePanelDisplay}
          >
            <span>Recreate</span>
          </button>
        </div>
        <div className="jobs-panel-list">
          <Experience
            pannelId="panel-3"
            className="job-panel active"
            title="Junior/Medior Web Developer"
            companyLink="https://coddin.nl/"
            company="Coddin"
            companyDate="April 2023 - Present"
            listItems={muzeItems}
          />
          <Experience
            pannelId="panel-2"
            className="job-panel"
            title="Junior Web Developer"
            companyLink="https://www.muze.nl/"
            company="Muze"
            companyDate="September 2021 - March 2023"
            listItems={muzeItems}
          />
          <Experience
            pannelId="panel-1"
            className="job-panel"
            title="Intern Front-end Developer"
            companyLink="https://mediafris.nl/"
            company="MediaFris"
            companyDate="September 2018 - January 2019"
            listItems={muzeItems}
          />
          <Experience
            pannelId="panel-0"
            className="job-panel"
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
