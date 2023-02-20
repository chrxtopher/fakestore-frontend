import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import NavButton from "../components/NavButton";

function Home() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));
  const [activeUser, setActiveUser] = useState(
    localStorage.getItem("activeUser")
  );
  console.log(loggedIn);

  const handleLogOut = () => {
    localStorage.setItem("loggedIn", false);
    localStorage.removeItem("activeUser");
    setLoggedIn("false");
    setActiveUser(null);
  };

  if (loggedIn === "true" && activeUser && activeUser != "") {
    return (
      <div className="continue">
        <p>{`Continue as ${activeUser}?`}</p>
        <div className="continue-buttons">
          <NavButton url={`/dashboard/${activeUser}`} title="Continue" />
          <button type="button" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
    );
  } else {
    localStorage.setItem("loggedIn", false);
    return (
      <div className="home-page">
        <div className="login">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Home;
