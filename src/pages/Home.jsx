import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import NavButton from "../components/NavButton";
import LogOutButton from "../components/LogOutButton";
import "../styles/homePage.css";

function Home() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));
  const [activeUser, setActiveUser] = useState(
    localStorage.getItem("activeUser")
  );

  const handleLogOut = () => {
    localStorage.setItem("loggedIn", false);
    localStorage.removeItem("activeUser");
    setLoggedIn("false");
    setActiveUser(null);
  };

  if (loggedIn === "true" && activeUser && activeUser.length > 0) {
    return (
      <div className="continue-prompt">
        <p>{`Continue as ${activeUser}?`}</p>
        <div className="continue-buttons">
          <NavButton url={`/dashboard/${activeUser}`} title="Continue" />
          <LogOutButton clickHandler={handleLogOut} />
        </div>
      </div>
    );
  } else {
    localStorage.setItem("loggedIn", false);
    localStorage.removeItem("activeUser");
    return (
      <div className="home-page">
        <LoginForm />
      </div>
    );
  }
}

export default Home;
