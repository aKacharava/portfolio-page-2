import "./Experiences.css";
import List from "../List/List";

const listItems = [
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
  return (
    <section className="experience" id="experience">
      <h2 className="heading">My Experiences</h2>
      <div className="inner">
        <div className="jobs-button-list">
          <button id="tab-0" className="job-button active">
            <span>Muze</span>
          </button>
          <button id="tab-1" className="job-button">
            <span>MediaFris</span>
          </button>
          <button id="tab-2" className="job-button">
            <span>Recreate</span>
          </button>
        </div>
        <div className="jobs-panel-list">
          <div id="panel-0" className="job-panel active">
            <h3>
              <span>Web developer </span>
              <span className="company">
                @
                <a
                  className="company-link"
                  href="https://www.muze.nl/"
                  target="_blank"
                >
                  Muze
                </a>
              </span>
            </h3>
            <p className="range">September 2021 - Present</p>
            <List className="job-panel-content-list" listItems={listItems} />
          </div>

          <div id="panel-0" className="job-panel active">
            <h3>
              <span>Web developer </span>
              <span className="company">
                @
                <a
                  className="company-link"
                  href="https://www.muze.nl/"
                  target="_blank"
                >
                  Muze
                </a>
              </span>
            </h3>
            <p className="range">September 2021 - Present</p>
            <List className="job-panel-content-list" listItems={listItems} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
