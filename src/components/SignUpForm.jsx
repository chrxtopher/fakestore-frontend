import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import ErrorCard from "./ErrorCard";
import "../styles/form.css";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className="signup-form">
      <label htmlFor="firstName" className="custom-field">
        <input
          type="text"
          value={firstName}
          required
          onChange={handleFirstNameChange}
        />
        <span className="placeholder">First Name</span>
      </label>
      <label htmlFor="lastName" className="custom-field">
        <input
          type="text"
          value={lastName}
          required
          onChange={handleLastNameChange}
        />
        <span className="placeholder">Last Name</span>
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
