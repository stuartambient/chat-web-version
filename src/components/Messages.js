/* import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretSquareDown } from "react-icons/fa";

const Messages = ({ onClick, status }) => (
  <AnimatePresence>
    <motion.div
      className="messages"
      key="messages"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="box-heading">
        <p className="messages-heading">Messages</p>
        <div className="fold-icon" id="messages" onClick={onClick}>
          <FaCaretSquareDown />
        </div>
      </div>
      <motion.ul className="messages-list">
        <li className="message">Hey</li>
        <li className="message">Hello</li>
        <li className="message">In reply</li>
        <li className="message">Reply</li>
        <li className="message">Cancelled</li>
      </motion.ul>
    </motion.div>
  </AnimatePresence>
);
export default Messages; */
