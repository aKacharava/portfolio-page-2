import './Project.css'
import List from '../../List/List'


function Project(props) {
  return (
    <li className="project-item">
      <div className="project-content">
        <p>{props.overline}</p>
        <h3 className="project-title">
          <a href={props.url}>{props.title}</a>
        </h3>
        <div className="project-description">
          <p>{props.description}</p>
        </div>
        <List className="project-tech-list" listItems={props.tech} />
        <div className="project-links">
          <a>Github</a>
          <a>{props.url}</a>
        </div>
      </div>
      <div className="project-img">
        <a href={props.url}>
          <div className="img img-wrapper img-wrapper-constrained">
            <div>
              <img src={props.imgSrc} />
            </div>
            <img src={props.imgSrc} />
          </div>
        </a>
      </div>
    </li>
  );
}

export default Project