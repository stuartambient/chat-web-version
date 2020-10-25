import React from "react";
import "../style/Button.css";

const Button = ({ type, className, id, onClick, children }) => (
  <button type={type} className={className} id={id} onClick={onClick}>
    {children}
  </button>
);

export default Button;
