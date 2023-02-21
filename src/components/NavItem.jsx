import React from "react";

const NavItem = ({ icon, clickHandler }) => {
  return (
    <li className="nav-item">
      <button type="button" className="icon-button" onClick={clickHandler}>
        {icon}
      </button>
    </li>
  );
};

export default NavItem;
