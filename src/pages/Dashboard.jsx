import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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
      <button type="button" onClick={logOutClick}>
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
