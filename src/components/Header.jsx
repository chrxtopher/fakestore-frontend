import React from "react";
import NavItem from "./NavItem";
import { ReactComponent as ProfileLogo } from "../svgs/profile-icon.svg";
import "../styles/header.css";

const Header = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-items">
        <NavItem icon={<ProfileLogo />} />
      </ul>
    </nav>
  );
};

export default Header;
