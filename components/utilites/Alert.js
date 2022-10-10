import React from "react";

const Alert = ({ type, message }) => {
  return (
    <div className={`alert alert-${type}`}>
      <span> ❕ </span> {message ? message : null}
    </div>
  );
};

export default Alert;
