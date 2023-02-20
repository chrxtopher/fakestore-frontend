import React from "react";

const ErrorCard = ({ message }) => {
  return (
    <div className="error-card">
      <p>{message}</p>
    </div>
  );
};

export default ErrorCard;
