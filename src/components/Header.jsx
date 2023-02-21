import React, { useState } from "react";
import NavItem from "./NavItem";
import { ReactComponent as ProfileLogo } from "../svgs/profile-icon.svg";
import "../styles/header.css";
import ProfileDropDown from "./ProfileDropDown";

const Header = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-items">
        <NavItem icon={<ProfileLogo />} dropDownMenu={<ProfileDropDown />} />
      </ul>
    </nav>
  );
};

export default Header;
