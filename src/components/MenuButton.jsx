import React from "react";
import "../styles/menuButton.css";

const MenuButton = ({ title, clickHandler, leftIcon, rightIcon }) => {
  return (
    <button type="button" onClick={clickHandler} className="menu-button">
      <div className="left-icon">{leftIcon}</div>
      {title}
      <div className="right-icon">{rightIcon}</div>
    </button>
  );
};
export default MenuButton;
