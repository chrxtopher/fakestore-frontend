import React from "react";
import "../styles/submitButton.css";

function SubmitButton({ title }) {
  return (
    <button type="submit" className="submit-button">
      {title}
    </button>
  );
}

export default SubmitButton;
