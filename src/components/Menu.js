import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Menu.css";

const Menu = () => {
  const routes = [
    {
      path: "/",
      exact: true,
      name: "Home",
      icon: <span className="material-icons">home</span>,
    },
    {
      path: "/data",
      name: "Data",
      icon: <span className="material-icons">timeline</span>,
    },
    {
      path: "/stats",
      name: "Stats",
      icon: <span className="material-icons">bar_chart</span>,
    },
    {
      path: "/about",
      name: "About",
      icon: <span className="material-icons">description</span>,
    },
  ];

  const menu = routes.map((link) => (
    <li key={link.name}>
      <NavLink
        className="menu--link"
        exact={link.exact ? link.exact : false}
        to={link.path}
      >
        {link.icon}
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="menu">
      <ul className="menu--list">{menu}</ul>
    </nav>
  );
};

export default Menu;
