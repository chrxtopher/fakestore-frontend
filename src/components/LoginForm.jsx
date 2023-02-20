import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavButton from "./NavButton";
import SubmitButton from "./SubmitButton";
import ErrorCard from "./ErrorCard";

function LoginForm() {
  const navigate = useNavigate();
  const url = process.env.REACT_APP_DATABASE_URL || "http://localhost:4050";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.get(`${url}/users/login/${username}`);
      const creds = res.data.credentials;
      if (creds && creds.password === password) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("activeUser", creds.username);
        navigate(`/dashboard/${creds.username}`);
      } else {
        localStorage.setItem("loggedIn", false);
        localStorage.removeItem("activeUser");
        setError("Incorrect password");
      }
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <label htmlFor="username">
        <p>Username</p>
        <input
          type="text"
          id="fakeStoreUsername"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <label htmlFor="password">
        <p>Password</p>
        <input type="text" value={password} onChange={handlePasswordChange} />
      </label>
      <div className="form-buttons">
        <SubmitButton title="Log In" />
        <NavButton url="/signup" title="Sign Up" />
      </div>
      {error.length > 0 && (
        <div className="error-message">
          <ErrorCard message={error} />
        </div>
      )}
    </form>
  );
}

export default LoginForm;
