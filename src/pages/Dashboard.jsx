import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LogOutButton from "../components/LogOutButton";
import axios from "axios";

const Dashboard = () => {
  const url = process.env.REACT_APP_DATABASE_URL || "http://localhost:4050";
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async (username) => {
      const res = await axios.get(`${url}/users/${username}`);
      setUser(res.data.user);
    };
    getUser(username);
  }, [username, url]);

  const logOutClick = () => {
    localStorage.removeItem("activeUser");
    navigate("/");
  };

  const testButton = () => {
    console.log(user);
  };

  return (
    <div>
      <button type="button" onClick={testButton}>
        Test
      </button>
      <p>Welcome {username}</p>
      <LogOutButton clickHandler={logOutClick} />
    </div>
  );
};

export default Dashboard;
