import React from "react";

function SubmitButton({ title }) {
  return (
    <button type="submit" className="submit-button">
      {title}
    </button>
  );
}

export default SubmitButton;
