import React from "react";
import "../styles/header.css";

const Header = ({ user, navItems }) => {
  if (user) {
    return (
      <nav className="nav-bar">
        <ul className="nav-items">
          <li>
            <div className="user-info">
              <h4>{`Welcome, ${user.first_name}`}</h4>
              <p>{user.username}</p>
            </div>
          </li>
          {navItems.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </nav>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default Header;
