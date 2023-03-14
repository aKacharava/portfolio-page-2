import "./Header.css";
import Button from "../../components/Button/Button";

function HeaderSmallNav() {
  return (
    <div className="menu-nav-side">
      <nav>
        <ul>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
        <Button className="header-button" name="Resume" />
      </nav>
    </div>
  );
}

export default HeaderSmallNav;
