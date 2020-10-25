import React from "react";
import Form from "./Form";
import Button from "./Button";
import Input from "./Input";
import IconWrapper from "./IconWrapper";
import HoverText from "./HoverText";
import { motion, useCycle } from "framer-motion";
import {
  MdSubscriptions,
  MdAddCircleOutline,
  MdSearch,
  MdMessage,
  MdAccountCircle,
} from "react-icons/md";
import { RiSendPlane2Line } from "react-icons/ri";

import { IconContext } from "react-icons";
import "../style/Menu.css";
import { FaBars } from "react-icons/fa";

const Menu = ({ props }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [hovering, setHovering] = React.useState({ inHover: false, id: "" });
  const [addInputField, setAddInputField] = React.useState({
    requested: false,
    id: "",
  });

  const { toggleInput, setToggleInput } = props;

  const handleMenuOpen = e => {
    toggleOpen();
  };

  const handleNavFormClick = e => {
    setAddInputField({ requested: true, id: e.target.id });
  };

  const handleMouseEnter = e => {
    setHovering({ inHover: true, id: e.target.id });
  };

  const handleMouseLeave = e => {
    setHovering({ inHover: false, id: "" });
  };

  const handleInputReset = () => {
    setToggleInput(!toggleInput);
    setAddInputField({ requested: false, id: "" });
  };

  // COMPONENTS AND PROPS
  const navElements = [
    <IconWrapper
      className="icon-wrapper all-channels"
      id="all-channels"
      onClick={props.handleNoFormNav}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MdSubscriptions className="nav-icon" />
    </IconWrapper>,
    <>
      <IconWrapper
        className="icon-wrapper add-channel"
        id="add-channel"
        onClick={handleNavFormClick}
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MdAddCircleOutline className="nav-icon" />
      </IconWrapper>
    </>,
    <>
      <IconWrapper
        className="icon-wrapper search-channels"
        id="search-channels"
        onClick={handleNavFormClick}
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MdSearch className="nav-icon" />
      </IconWrapper>
    </>,
    <IconWrapper
      className="icon-wrapper my-messages"
      id="my-messages"
      onClick={props.handleNoFormNav}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MdMessage className="nav-icon " />
    </IconWrapper>,
    <IconWrapper
      className="icon-wrapper my-account"
      id="my-account"
      onClick={props.handleNoFormNav}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {" "}
      <MdAccountCircle className="nav-icon " />
    </IconWrapper>,
  ];

  const formVariants = {
    open: { display: "flex", opacity: 1 },
    close: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  };

  const reverseDelay = [0.5, 0.4, 0.3, 0.2, 0.1];
  const forwardDelay = [0.1, 0.2, 0.3, 0.4, 0.5];

  const menu = {
    open: i => ({
      display: "inherit",
      opacity: 1,
      transition: {
        delay: forwardDelay[i],
      },
    }),
    closed: i => ({
      opacity: 0,
      transition: {
        delay: reverseDelay[i],
        ease: "easeInOut",
      },
      transitionEnd: {
        display: "none",
      },
    }),
  };

  const openedMenu = {
    opened: () => ({
      rotate: 90,
      scale: [1.1, 1.2, 1],
    }),
    closed: {
      rotate: 0,
      scale: [0.9, 0.8, 1],
    },
  };
  // try dynamic variants for staggering items;
  return (
    <>
      <motion.div className="nav-items">
        <IconContext.Provider value={{ className: "react-icons" }}>
          <motion.div
            className="nav-menu"
            onClick={handleMenuOpen}
            initial={{ opacity: 1 }}
            variants={openedMenu}
            animate={isOpen ? "opened" : "closed"}
          >
            <FaBars />
          </motion.div>
          {navElements.map((el, i) => (
            <motion.div
              key={i}
              id={i}
              custom={i}
              className="nav-item"
              variants={menu}
              whileHover={{
                scale: [null, 1.1, 1],
                transition: { repeat: Infinity, duration: 3 },
              }}
              initial={"closed"}
              animate={isOpen ? "open" : "closed"}
            >
              {el}
            </motion.div>
          ))}
        </IconContext.Provider>
      </motion.div>
      {hovering ? (
        <HoverText className="hover-text" hoveringId={hovering.id}></HoverText>
      ) : null}
      {addInputField.requested ? (
        <Form
          id={addInputField.id}
          className="nav-input"
          onSubmit={props.handleSubmit}
          variants={formVariants}
          animate={toggleInput ? "close" : "open"}
          reset={handleInputReset}
        >
          <Input
            type="text"
            placeholder={addInputField.id}
            value={
              addInputField.id === "search-channels"
                ? props.fieldValue.searchchannel
                : props.fieldValue.addchannel
            }
            onChange={props.handleChange}
            name={addInputField.id}
            //className={state.searchchannelfield}
          />
          <Button type="submit">
            <span className="btn-txt" role="img" aria-label="search channels">
              <RiSendPlane2Line />
            </span>
          </Button>
        </Form>
      ) : null}
    </>
  );
};

export default Menu;
