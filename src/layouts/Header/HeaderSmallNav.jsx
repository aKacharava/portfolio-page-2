import "./Header.css";
import Button from "../../components/Button/Button";

function HeaderSmallNav(props) {
  return (
    <div className="menu-nav-side">
      <nav>
        <ul>
          <li>
            <a href="#about" onClick={props.toggleNavHandler}>
              about
            </a>
          </li>
          <li>
            <a href="#projects" onClick={props.toggleNavHandler}>
              projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.toggleNavHandler}>
              contact
            </a>
          </li>
        </ul>
        <Button className="header-button" name="Resume" />
      </nav>
    </div>
  );
}

export default HeaderSmallNav;
