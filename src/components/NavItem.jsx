import React, { useState } from "react";

const NavItem = ({ icon, dropDownMenu }) => {
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    setOpen(!open);
  };
  return (
    <li className="nav-item">
      <button type="button" className="icon-button" onClick={clickHandler}>
        {icon}
      </button>
      {open && dropDownMenu}
    </li>
  );
};

export default NavItem;
