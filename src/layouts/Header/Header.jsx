import './Header.css'
import Button from '../../components/Button/Button'

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/">LOGO</a>
        </div>
        <div className="menu-nav">
          <ul>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#experience">experience</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
          <Button className="header-button" name="Resume" link="/resume.pdf" />
        </div>
        <div className="menu-nav-small">
          <div>
            <button className="menu-hamburger">
              <div className="hamburger-box">
                <div className="hamburger-box-inner"></div>
              </div>
            </button>
          </div>
          {/* <ul>
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
          <Button className="header-button" name="Resume" /> */}
        </div>
      </nav>
    </header>
  );
}

export default Header;