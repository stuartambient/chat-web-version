import React from "react";
import { motion } from "framer-motion";

const IconWrapper = ({
  className,
  id,
  onClick,
  onMouseOver,
  onMouseLeave,
  children,
}) => {
  return (
    <motion.div
      className={className}
      id={id}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      initial={{ backgroundColor: "darkblue", color: "lightseagreen" }}
      whileHover={{ scale: 1.2, backgroundColor: "lightsalmon" }}
    >
      {children}
    </motion.div>
  );
};

export default IconWrapper;
