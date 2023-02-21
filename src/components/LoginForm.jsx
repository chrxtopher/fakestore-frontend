import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SubmitButton from "./SubmitButton";
import ErrorCard from "./ErrorCard";
import "../styles/form.css";

function LoginForm() {
  const navigate = useNavigate();
  const url = process.env.REACT_APP_DATABASE_URL || "http://localhost:4050";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
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
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username" className="custom-field">
        <input
          type="text"
          value={username}
          required
          onChange={handleUsernameChange}
        />
        <span className="placeholder">Username</span>
      </label>
      <label htmlFor="password" className="custom-field">
        <input
          type="text"
          value={password}
          required
          onChange={handlePasswordChange}
        />
        <span className="placeholder">Password</span>
      </label>
      <SubmitButton title="Log In" />
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
      {error.length > 0 && (
        <div className="error-message">
          <ErrorCard message={error} />
        </div>
      )}
    </form>
  );
}

export default LoginForm;
