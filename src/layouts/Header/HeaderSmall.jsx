import { useState } from "react";
import "./Header.css";
import HeaderSmallNav from "./HeaderSmallNav";

function HeaderSmall() {
  const [isNavDisplayed, setIsNavDisplayed] = useState(false);

  function toggleNavHandler() {
    setIsNavDisplayed(true);
  }

  return (
    <div className="menu-nav-small">
      <div>
        <button className="menu-hamburger">
          <div className="hamburger-box">
            <div className="hamburger-box-inner"></div>
          </div>
        </button>
      </div>
      {isNavDisplayed && <HeaderSmallNav onShowNav={setIsNavDisplayed} />}
    </div>
  );
}

export default HeaderSmall;
