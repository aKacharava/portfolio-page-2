import "./Experience.css";
import List from "../../List/List";

function Experience(props) {
  return (
    <div
      id={props.pannelId}
      className={props.className}
    >
      <h3>
        <span>{props.title}</span>
        <span className="company">
          {" "}
          <a className="company-link" href={props.companyLink} target="_blank">
           @{props.company}
          </a>
        </span>
      </h3>
      <p className="range">{props.companyDate}</p>
      <List className="job-panel-content-list" listItems={props.listItems} />
    </div>
  );
}

export default Experience;
