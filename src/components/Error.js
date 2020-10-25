import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
/* import { IconContext } from "react-icons"; */
import { motion } from "framer-motion";
const Error = ({ precheck, className, children, onClick }) => {
  return (
    <>
      (
      {precheck ? (
        <div className={className}>
          <p>{precheck}</p>
        </div>
      ) : (
        <motion.div
          className={className}
          onClick={onClick}
          //variants={errorVariants}
          /* animate={{ x: "-100%" }}
          transition={{ duration: 10 }} */
        >
          <div className="err-message">
            <p>{children}</p>
          </div>
          <div className="close-error">
            <AiOutlineCloseCircle />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Error;
