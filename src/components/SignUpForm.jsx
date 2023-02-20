import React, { useState } from "react";
import NavButton from "./NavButton";
import SubmitButton from "./SubmitButton";
import ErrorCard from "./ErrorCard";

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
    <form className="sign-up-form">
      <div className="name-inputs">
        <label htmlFor="firstName">
          <p>First Name</p>
          <input
            type="text"
            id="fakeStoreFirstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <label htmlFor="lastName">
          <p>Last Name</p>
          <input
            type="text"
            id="fakeStoreLastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </label>
      </div>
      <div className="credential-inputs">
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
      </div>
      <div className="signup-buttons">
        <SubmitButton title="Create Account" />
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
      {error.length > 0 && (
        <div className="error-message">
          <ErrorCard message={error} />
        </div>
      )}
    </form>
  );
};

export default SignUpForm;
