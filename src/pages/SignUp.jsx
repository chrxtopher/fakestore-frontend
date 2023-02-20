import React from "react";
import NavButton from "../components/NavButton";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <div className="sign-up-page">
      <div className="signup">
        <h2>Sign Up</h2>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
