import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ url, title }) => {
  return (
    <Link to={url}>
      <button type="button" className="nav-button">
        {title}
      </button>
    </Link>
  );
};

export default NavButton;
