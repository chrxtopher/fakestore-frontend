import React, { useState } from "react";
import NavItem from "./NavItem";
import { ReactComponent as ProfileLogo } from "../svgs/profile-icon.svg";
import "../styles/header.css";
import ProfileDropDown from "./ProfileDropDown";

const Header = ({ user }) => {
  if (user) {
    return (
      <nav className="nav-bar">
        <ul className="nav-items">
          <li>
            <div className="user-info">
              <h5>{`Welcome, ${user.first_name}`}</h5>
              <p>{`${user.username}`}</p>
            </div>
          </li>
          <NavItem
            icon={<ProfileLogo />}
            dropDownMenu={
              <ProfileDropDown cart={user.cart} wishlist={user.wishlist} />
            }
          />
        </ul>
      </nav>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default Header;
