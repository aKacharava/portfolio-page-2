
import { Fragment } from 'react'
import './Header.css'
import Button from "../../components/Button/Button"

function HeaderSmallNav() {
  return (
    <Fragment>
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
      <Button
        className="header-button"
        name="Resume"
        onShowNav={props.onShowNav}
      />
    </Fragment>
  );
}

export default HeaderSmallNav