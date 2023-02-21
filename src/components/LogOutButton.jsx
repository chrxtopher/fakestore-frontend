import React from "react";
import "../styles/logoutButton.css";

const LogOutButton = ({ clickHandler }) => {
  return (
    <button type="button" className="logout-button" onClick={clickHandler}>
      Log Out
    </button>
  );
};

export default LogOutButton;
