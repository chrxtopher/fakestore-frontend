import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmitButton from "./SubmitButton";
import ErrorCard from "./ErrorCard";
import axios from "axios";
import "../styles/form.css";

const SignUpForm = () => {
  const url = process.env.REACT_APP_DATABASE_URL || "http://localhost:4050";
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePassword2Change = (e) => {
    setPassword2(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (password !== password2) {
        setError("Passwords do not match");
      } else {
        await axios.post(`${url}/users`, {
          username: username,
          password: password,
          first_name: firstName,
          last_name: "",
          wishlist: [],
          cart: JSON.stringify([]), // database converts JSON string to true JSON
        });

        localStorage.setItem("loggedIn", true);
        localStorage.setItem("activeUser", username);
        navigate(`/dashboard/${username}`);
      }
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <label htmlFor="firstName" className="custom-field">
        <input
          type="text"
          value={firstName}
          required
          onChange={handleFirstNameChange}
        />
        <span className="placeholder">First Name</span>
      </label>
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
      <label htmlFor="password2" className="custom-field">
        <input
          type="text"
          value={password2}
          required
          onChange={handlePassword2Change}
        />
        <span className="placeholder">Re-enter Password</span>
      </label>
      <SubmitButton title="Create Account" />
      <p>
        Already have an account? <a href="/">Login</a>
      </p>
      {error.length > 0 && (
        <div className="error-message">
          <ErrorCard message={error} />
        </div>
      )}
    </form>
  );
};

export default SignUpForm;
