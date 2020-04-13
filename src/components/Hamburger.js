import React from "react";

const Hamburger = (props) => {
  return (
    <div className="menu--trigger__container">
      <button onClick={props.handleMenu} className="menu--trigger__btn">
        <span className="menu--trigger__span"></span>
      </button>
    </div>
  );
};

export default Hamburger;
