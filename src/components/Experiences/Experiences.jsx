import { useState } from "react";
import "./Experiences.css";
import Experience from "./Experience/Experience";
import { experiences } from "../../data/experiences.js";
import JobItemButton from "./JobItemButton/JobItemButton.jsx";

function Experiences() {
  const [toggleTab, setToggleTab] = useState(experiences[0].tab);

  function togglePanelDisplay(index) {
    setToggleTab(index);
  }

  return (
    <section className="experience" id="experience">
      <h2 className="heading">My Experiences</h2>
      <div className="inner">
        <div className="jobs-button-list" role="tablist" aria-label="Job tabs">
          {
              experiences.map((experience, index) => {
              return (
                <JobItemButton
                  key={index}
                  tabId={experience.tab}
                  tabName={experience.name}
                  toggleTab={toggleTab}
                  onTogglePanel={togglePanelDisplay}
                />
              )
            })
          }
          <div className={"jobs-highlighted tab" + toggleTab}></div>
        </div>
        <div className="jobs-panel-list">
            {
                experiences.map((experience, index) => {
                    return(
                      <Experience
                          key={index}
                          pannelId={"panel-" + experience.tab}
                          className={toggleTab === experience.tab ? "job-panel active" : "job-panel"}
                          title={experience.title}
                          companyLink={experience.link}
                          company={experience.name}
                          companyDate={experience.date}
                          listItems={experience.contents}
                      />
                    )
                })
            }
        </div>
      </div>
    </section>
  );
}

export default Experiences;
