import React from "react";
import reactLogo from "../images/react-router.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header--container">
      <a className="nav--logo" href="/">
        <img src={reactLogo} alt="logo" />
      </a>
    </div>
  );
};

export default Header;
