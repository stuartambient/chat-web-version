/* import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretSquareDown } from "react-icons/fa";

const Subscribers = ({ onClick, status }) => {
  const fakes = ["Mary", "Joe", "Whiskey", "Fox", "Tango"];

  const elementVariants = {
    open: i => ({
      display: "inherit",
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
    closed: i => ({
      opacity: 0,
      display: "none",
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const iconVariants = {
    off: {
      rotate: 0,
    },
    on: {
      rotate: -90,
      color: "red",
    },
    transition: {
      duration: 0.2,
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        className="subscribers"
        key="subscribers"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="box-heading">
          <p className="subscribers-heading">Subscribers</p>
          <motion.div
            className="fold-icon"
            id="subscribers"
            onClick={onClick}
            variants={iconVariants}
            initial={"off"}
            animate={status ? "on" : "off"}
          >
            <FaCaretSquareDown className={status ? "rotated-icon" : "spin"} />
          </motion.div>
        </div>
        <motion.ul className="subscribers-list">
          {fakes.map((fake, i) => (
            <motion.li
              className="subscriber"
              key={i}
              custom={i}
              id={i}
              variants={elementVariants}
              initial={"open"}
              animate={status ? "closed" : "open"}
            >
              {fake}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default Subscribers; */
