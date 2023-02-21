import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import LogOutButton from "../components/LogOutButton";

const Dashboard = () => {
  const navigate = useNavigate();
  const { username } = useParams();

  const logOutClick = () => {
    localStorage.removeItem("activeUser");
    navigate("/");
  };

  return (
    <div>
      <p>Welcome {username}</p>
      <LogOutButton clickHandler={logOutClick} />
    </div>
  );
};

export default Dashboard;
