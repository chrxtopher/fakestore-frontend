import React from "react";
import SubmitButton from "./SubmitButton";

function LoginForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <label htmlFor="username">
        <p>Username</p>
        <input type="text" id="username" />
      </label>
      <label htmlFor="password">
        <p>Password</p>
        <input type="text" id="password" />
      </label>
      <div className="form-buttons">
        <SubmitButton title="Submit" />
      </div>
    </form>
  );
}

export default LoginForm;
