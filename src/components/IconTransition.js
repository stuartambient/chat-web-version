/* import React from "react";
import { Transition } from "react-transition-group";

const IconTransition = ({ entered, id, children, className, appear }) => {
  const [ms, setMs] = React.useState([2000, 1500, 1000, 500, 0]);

  let transitionProps;
  entered
    ? (transitionProps = `opacity ${+id * 500}ms ease-in-out`)
    : (transitionProps = `opacity ${ms[id]}ms ease-in-out`);

  const defaultStyle = {
    transition: transitionProps,
    opacity: 0,
  };

  const nodeRef = React.useRef(null);

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Transition
      nodeRef={nodeRef}
      in={entered}
      appear={appear}
      mountOnEnter
      unmountOnExit
      timeout={{
        entering: 1000,
        enter: 3000,
        exiting: 1000,
        exit: 2000,
      }}
    >
      {state => (
        <div
          className={className}
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

export default IconTransition; */
