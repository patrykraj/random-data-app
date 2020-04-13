import React from "react";
import "../styles/Aside.css";

import Hamburger from "../components/Hamburger";
import Menu from "../components/Menu";
import reactLogo from "../images/react-router.svg";

const Aside = (props) => {
  return (
    <>
      <Hamburger handleMenu={props.handleMenu} />
      <div className="aside--container">
        <a className="nav--logo" href="/">
          <img src={reactLogo} alt="logo" />
        </a>
        <Menu />
        <ul className="aside--options">
          <a className="aside--option" href="/">
            <li>
              <span className="material-icons">account_balance_wallet</span>
              $1,000.00
              <span className="material-icons">keyboard_arrow_down</span>
            </li>
          </a>
          <a className="aside--option" href="/">
            <li>
              <span className="material-icons">chat</span>
              Chat
              <span></span>
            </li>
          </a>
          <a className="aside--option" href="/">
            <li>
              <span className="material-icons">person</span>
              Your info
              <span></span>
            </li>
          </a>
          <a className="aside--option" href="/">
            <li>
              <span className="material-icons">meeting_room</span>
              Log out
              <span></span>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Aside;
