import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretSquareDown } from "react-icons/fa";
import { GiSilenced } from "react-icons/gi";

const Panel = ({ onClick, status, className, items, setItemHover, height }) => {
  const [availableHeight, setAvailable] = React.useState("0px");
  React.useEffect(() => {
    if (height !== availableHeight) setAvailable(height);
  }, [height, availableHeight, setAvailable]);

  const ulVariants = {
    opened: {
      display: "block",
      opacity: 1,
      maxHeight: availableHeight,
      transition: {
        duration: 0.8,
      },
    },
    closed: {
      opacity: 0,
      maxHeight: "0px",
      transition: {
        duration: 0.8,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const iconVariants = {
    off: {
      y: 0,
      rotate: -90,
    },
    on: {
      y: 3,
      rotate: 0,
    },
    transition: {
      duration: 0.2,
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        className={`${className} panel`}
        key={className}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="box-heading">
          <p className={`subscribers-heading`}>
            {className.charAt(0).toUpperCase() + className.slice(1)}
          </p>
          <motion.div
            className="fold-icon"
            id={className}
            onClick={onClick}
            variants={iconVariants}
            initial={"off"}
            animate={status ? "on" : "off"}
          >
            <FaCaretSquareDown className={status ? "rotated-icon" : "spin"} />
          </motion.div>
        </div>
        <motion.div className={`${className}-list panellist`}>
          <motion.ul
            layout
            variants={ulVariants}
            initial={"closed"}
            animate={status ? "opened" : "closed"}
            style={{ height: availableHeight }}
            /* key={height} */
          >
            {items.map((fake, i) => (
              <motion.li
                className={`${className.slice(0, -1)} item`}
                key={i}
                id={i}
              >
                <motion.span
                  onHoverStart={e => setItemHover(e.target.textContent)}
                  onHoverEnd={() => setItemHover(false)}
                >
                  {className !== "channels" ? fake.name : fake}
                </motion.span>
                {className !== "messages" && className !== "channels" ? (
                  <div className="item-icon-1">
                    {" "}
                    <GiSilenced />
                  </div>
                ) : null}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Panel;
