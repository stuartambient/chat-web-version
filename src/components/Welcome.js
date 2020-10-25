import React from "react";
import "../style/Welcome.css";

const Welcome = ({ signup }) => (
  <div className="welcome-message">
    <h1>`Welcome - ${signup.toString()}`</h1>
  </div>
);

export default Welcome;
