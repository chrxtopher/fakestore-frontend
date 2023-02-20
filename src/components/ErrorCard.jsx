import React from "react";
import "../styles/errorCard.css";

const ErrorCard = ({ message }) => {
  return (
    <div className="error-card">
      <p>{message}</p>
    </div>
  );
};

export default ErrorCard;
