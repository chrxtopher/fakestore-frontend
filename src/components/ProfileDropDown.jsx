import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dropdownMenu.css";
import LogOutButton from "../components/LogOutButton";

const ProfileDropDown = () => {
  const navigate = useNavigate();
  const logOutClick = () => {
    localStorage.removeItem("activeUser");
    navigate("/");
  };

  return (
    <div className="profile-dropdown">
      <LogOutButton clickHandler={logOutClick} />
    </div>
  );
};

export default ProfileDropDown;
