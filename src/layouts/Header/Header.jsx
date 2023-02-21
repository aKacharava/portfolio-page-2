import "./Header.css";
import Button from "../../components/Button/Button";
import HeaderSmall from "./HeaderSmall";
import { Fragment, useState } from "react";

function Header() {
  const [isNavDisplayed, setIsNavDisplayed] = useState(false);

  function toggleNavDisplay(handler) {
    var menuNavStyle = document.querySelector(".menu-nav-side");
    var blur = document.querySelector(".blur");
    var hamburgerIcon = document.querySelector(".hamburger-box-inner");
    hamburgerIcon.classList.toggle("active");
    
    if (handler === false) {
      document.body.classList.add("body-blur");
      blur.style.transform = "translateX(0vw)";
      blur.style.backdropFilter = "blur(10px)";
      menuNavStyle.style.transform = "translateX(0vw)";
    } else {
      document.body.classList.remove("body-blur");
      blur.style.transform = "translateX(100vw)";
      blur.style.backdropFilter = "blur(0)";
      menuNavStyle.style.transform = "translateX(100vw)";
    }
  }

  function toggleNavHandler() {
    setIsNavDisplayed(!isNavDisplayed);
    toggleNavDisplay(isNavDisplayed);
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
