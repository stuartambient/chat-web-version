import React from "react";
import "../style/Form.css";
import { motion } from "framer-motion";

const Form = ({
  id,
  className,
  onSubmit,
  children,
  variants,
  animate,
  reset,
}) => {
  const onUpdate = latest => {
    if (latest.display === "none" && latest.opacity === 0) reset();
  };
  return (
    <motion.form
      id={id}
      className={className}
      variants={variants}
      animate={animate}
      transition={{ duration: 1.5 }}
      onSubmit={onSubmit}
      onUpdate={onUpdate}
    >
      {children}
    </motion.form>
  );
};

export default Form;
