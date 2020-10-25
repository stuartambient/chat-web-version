/* import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretSquareDown } from "react-icons/fa";

const Friends = ({ onClick, status }) => (
  <AnimatePresence>
    <motion.div
      className="friends"
      key="friends"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="box-heading">
        <p className="friends-heading">Friends</p>
        <div className="fold-icon" id="friends" onClick={onClick}>
          <FaCaretSquareDown />
        </div>
      </div>
      <motion.ul className="friends-list">
        <li className="friend">Mary</li>
        <li className="friend">Joe</li>
        <li className="friend">Whiskey</li>
        <li className="friend">Fox</li>
        <li className="friend">Tango</li>
      </motion.ul>
    </motion.div>
  </AnimatePresence>
);
export default Friends; */
