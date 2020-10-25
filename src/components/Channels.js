import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretSquareDown } from "react-icons/fa";

const Channels = ({ chans, onClick, status }) => (
  <AnimatePresence>
    <motion.div
      className="channels"
      key="channels"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 1 }}
    >
      <div className="box-heading">
        <div className="fold-icon" id="channels" onClick={onClick}>
          <FaCaretSquareDown />
        </div>
        <p className="channels-heading">Channels</p>
      </div>
      {chans.length > 0 ? (
        <motion.ul className="channels-list">
          <p className="channels-heading">Channels</p>
          {chans.map(chan => (
            <li id={chan} key={chan} className="chan">
              {chan}
            </li>
          ))}
        </motion.ul>
      ) : null}
    </motion.div>
  </AnimatePresence>
);

export default Channels;
