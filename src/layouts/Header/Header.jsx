import "./Header.css";
import Button from "../../components/Button/Button";
import HeaderSmall from "./HeaderSmall";
import { useState } from "react";

function Header() {
  const [isNavDisplayed, setIsNavDisplayed] = useState(false);

  function toggleNavDisplay() {
    var menuNavStyle = document.querySelector(".menu-nav-side");
    var blur = document.querySelector(".blur");
    var hamburgerIcon = document.querySelector(".hamburger-box-inner");

    hamburgerIcon.classList.toggle("active");
    menuNavStyle.classList.toggle("active");
    blur.classList.toggle("active");
    document.body.classList.toggle("body-blur");
  }

  function toggleNavHandler() {
    setIsNavDisplayed(!isNavDisplayed);
    toggleNavDisplay();
  }

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
          <Button className="header-button" name="Resume" />
        </div>
        <HeaderSmall
          isNavDisplayed={isNavDisplayed}
          toggleNavHandler={toggleNavHandler}
        />
      </nav>
      <div className="blur"></div>
    </header>
  );
}

export default Header;
