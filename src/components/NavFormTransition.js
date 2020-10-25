/* import React from "react";
import { CSSTransition } from "react-transition-group";
import Input from "./Input";

const NavFormTransition = ({ open, setOpenNavForm }) => {
  const nodeRef = React.useRef(null);
  return (
    <CSSTransition
      in={open}
      timeout={2000}
      classNames="nav-form-field"
      nodeRef={nodeRef}
    >
      <Input
        type="text"
        placeholder="add-channel"
        className="nav-form-field"
        ref={nodeRef}
        name="add-channel"
        id="nav-form-field-add-channel"
      />
    </CSSTransition>
  );
};

export default NavFormTransition;
 */
