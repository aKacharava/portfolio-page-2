import './Header.css'
import Button from '../../components/Button/Button'
import HeaderSmall from './HeaderSmall';

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
          <Button className="header-button" name="Resume"/>
        </div>
        <HeaderSmall />
      </nav>
    </header>
  );
}

export default Header;