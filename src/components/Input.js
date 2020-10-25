import React from "react";
import "../style/Input.css";
import { motion } from "framer-motion";

const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  className,
  /* variants,
  controls, */
}) => {
  return (
    <motion.input
      /* variants={variants}
      initial="close"
      animate="open" */
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    ></motion.input>
  );
};

export default Input;
