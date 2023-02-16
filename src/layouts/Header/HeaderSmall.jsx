import "./Header.css";
import HeaderSmallNav from "./HeaderSmallNav";

function HeaderSmall(props) {
  return (
    <div className="menu-nav-small">
      <div>
        <button className="menu-hamburger" onClick={props.toggleNavHandler}>
          <div className="hamburger-box">
            <div className="hamburger-box-inner"></div>
          </div>
        </button>
        <HeaderSmallNav />
      </div>
    </div>
  );
}

export default HeaderSmall;
