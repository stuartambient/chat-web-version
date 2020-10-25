import React from "react";
import { motion } from "framer-motion";
import "../style/ChannelView.css";

const ChannelView = ({
  className,
  id,
  viewName,
  style,
  children,
  onChange,
  onSubmit,
  textInput,
}) => {
  return className.includes("blankview") ? (
    <motion.div className={className} id={id} style={style}>
      {viewName}
      {children}
    </motion.div>
  ) : (
    <motion.div className={className} id={id} style={style}>
      {children}
    </motion.div>
  );
};

export default ChannelView;
