import "./Header.css";
import HeaderSmall from "./HeaderSmall";
import { useState } from "react";
import logo from "../../assets/img/logo.svg";

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
          <a href="#">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="1501.000000pt"
              height="1501.000000pt"
              viewBox="0 0 1501.000000 1501.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,1501.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  d="M7205 11900 c-1376 -106 -2587 -811 -3339 -1945 -129 -195 -175 -274
-274 -471 -691 -1380 -597 -3039 246 -4334 694 -1069 1824 -1783 3087 -1954
222 -30 404 -39 684 -33 371 8 629 42 971 128 1659 416 2926 1771 3234 3459
52 286 61 398 61 790 -1 394 -13 534 -71 830 -172 864 -580 1633 -1198 2252
-713 715 -1625 1152 -2641 1264 -165 18 -603 26 -760 14z m-1050 -1892 l300
-308 1055 1 1055 0 534 549 c294 302 536 548 538 546 2 -1 -145 -344 -325
-762 l-329 -759 -542 -5 -542 -5 540 -850 539 -850 331 -3 331 -2 0 -215 0
-215 -329 0 c-305 0 -330 -1 -335 -17 -3 -10 -135 -560 -295 -1223 l-289
-1205 -127 -213 -126 -212 -641 2 -641 3 -117 210 -116 211 -294 1222 -294
1222 -328 0 -328 0 0 215 0 215 328 0 327 0 541 853 540 852 -540 3 -541 2
-327 758 c-181 417 -328 761 -328 765 0 8 196 -191 775 -785z"
                />
                <path
                  d="M6986 8205 c-285 -350 -516 -639 -513 -641 2 -2 470 -3 1041 -2
l1037 3 -517 635 c-284 349 -519 636 -524 638 -4 1 -240 -284 -524 -633z m831
-63 c170 -224 313 -413 317 -419 6 -10 -122 -13 -624 -13 -406 0 -630 3 -628
10 7 22 614 837 620 834 3 -2 145 -187 315 -412z"
                />
                <path
                  d="M6470 7098 c64 -236 644 -2352 651 -2375 l11 -33 377 0 378 0 328
1198 c181 658 330 1207 333 1220 l4 22 -1045 0 -1045 0 8 -32z m1667 -210 c-3
-13 -101 -466 -217 -1008 -116 -542 -213 -993 -216 -1002 -5 -16 -23 -18 -197
-18 l-192 0 -224 1003 c-124 551 -226 1012 -229 1025 l-4 22 642 0 642 0 -5
-22z"
                />
              </g>
            </svg>
          </a>
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
          <a
            className="header-button"
            href="./CV-Alexander-Kacharava.pdf"
            download
          >
            Resume
          </a>
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
