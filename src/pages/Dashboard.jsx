import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const Dashboard = () => {
  const url = process.env.REACT_APP_DATABASE_URL || "http://localhost:4050";
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async (username) => {
      const res = await axios.get(`${url}/users/${username}`);
      setUser(res.data.user);
    };
    getUser(username);
  }, [username, url]);

  return (
    <div className="dashboard">
      <header>
        <Header />
      </header>
    </div>
  );
};

export default Dashboard;
