import React, { useState } from "react";
import axios from "axios";
import NavButton from "./NavButton";
import SubmitButton from "./SubmitButton";

function LoginForm() {
  const url = process.env.REACT_APP_DATABASE_URL || "http://localhost:4050";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${url}/users/login/${username}`);
      const creds = res.data.credentials;
      if (creds.password != password) {
        console.log("Incorrect password.");
      } else {
        console.log("Logged In");
      }
    } catch (err) {
      console.log(err.response.data.error);
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
    </form>
  );
}

export default LoginForm;
