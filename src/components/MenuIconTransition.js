/* import React from "react";
import { Transition } from "react-transition-group";

const MenuIconTransition = ({ entered, onClick, children }) => {
  const duration = 5000;

  const defaultStyle = {
    transition: `rotate ${duration}ms ease-in-out`,
    transform: "rotate(0deg)",
  };

  const transitionStyles = {
    entering: { transform: `rotate(90deg)` },
    entered: { transform: `rotate(90deg)` },
    exiting: { transform: `rotate(0deg)` },
    exited: { transform: `rotate(0deg)` },
  };

  const nodeRef = React.useRef(null);

  return (
    <Transition in={entered} timeout={duration} nodeRef={nodeRef}>
      {state => (
        <div
          className="nav-menu"
          onClick={onClick}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default MenuIconTransition; */
