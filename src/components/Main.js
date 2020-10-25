import React from "react";
import Menu from "./Menu";
import MainWindow from "./MainWindow";
import Error from "./Error";
import Panel from "./Panel";
import ItemHover from "./ItemHover";
import useChannels from "../hooks/useChannels";
import useMenu from "../hooks/useMenu";
import useResponses from "../hooks/useResponses";
import useMinimize from "../hooks/useMinimize";
import useLayout from "../hooks/useLayout";
import processOpenedElementLength from "../helpers/processOpenedElementLength";
import "../style/Main.css";
import { BsBackspaceFill, BsBackspaceReverseFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

import { names1, names2, messages } from "../constants/panelItems";
import useMain from "../hooks/useMain";

const Main = ({ handleRequest, eventResponse, switchLayout }) => {
  const [itemHover, setItemHover] = React.useState(false);

  // CUSTOM HOOKS

  const {
    chans,
    addChannel,
    setAddChannel,
    channelMessage,
    errorMessage,
    setErrorMessage,
  } = useResponses(eventResponse);

  const {
    channels,
    setChannel,
    handleViewChange,
    handleCloseTab,
    unsubscribe,
    setUnsubscribe,
  } = useChannels();

  const {
    fieldValue,
    handleChange,
    handleSubmit,
    selectedMenuItem,
    setSelected,
    handleNoFormNav,
    toggleInput,
    setToggleInput,
  } = useMenu();

  const { minimizedElement, setMinimizeElement } = useMinimize();

  const { layout, setLayout } = useLayout(switchLayout);

  useMain(
    selectedMenuItem,
    setSelected,
    setAddChannel,
    handleRequest,
    setChannel,
    addChannel,
    unsubscribe,
    setUnsubscribe
  );

  // END OF CUSTOM HOOKS
  /*   React.useEffect(() => {
    if (channelMessage) console.log(channelMessage);
  }, [channelMessage]); */

  const getTotalHeight = React.useCallback(() => {
    const opened = minimizedElement.leftSidePanels.filter(ul => !ul.value);
    return processOpenedElementLength(opened.length);
  }, [minimizedElement]);

  const channelProps = {
    channels,
    handleViewChange,
    handleCloseTab,
  };

  const menuProps = {
    fieldValue,
    handleChange,
    handleSubmit,
    /*     selectedMenuItem,
    setSelected, */
    handleNoFormNav,
    toggleInput,
    setToggleInput,
  };

  const handleCloseError = e => {
    console.log(e.target);
    setErrorMessage(false);
  };

  const handleFoldElement = e => {
    switch (e.target.id) {
      case "subscribers":
      case "friends":
      case "messages":
        return setMinimizeElement({ type: "left", value: e.target.id });
      case "channels":
        return setMinimizeElement({ type: "right", value: e.target.id });
      default:
        return;
    }
  };

  const handleLayoutChange = e => {
    const { id } = e.target;
    id === "left"
      ? setLayout({ left: !layout.left, right: layout.right })
      : setLayout({ right: !layout.right, left: layout.left });
  };

  const leftLayoutVariants = {
    open: {
      color: "red",
    },
    close: {
      color: "steelblue",
    },
  };

  const rightLayoutVariants = {
    open: {
      color: "red",
    },
    close: {
      color: "steelblue",
    },
  };

  // REFS
  const mainWindowRef = React.useRef();
  const leftRef = React.useRef();
  const rightRef = React.useRef();

  const resize = () => {
    /* console.log(
       window.getComputedStyle(mainWindowRef.current).getPropertyValue("height"),
      window.getComputedStyle(leftRef.current).getPropertyValue("height"),
      window.getComputedStyle(rightRef.current).getPropertyValue("height") 
      window.innerWidth,
      window.innerHeight
    ); */
  };

  React.useEffect(() => {
    window.onresize = resize;
  }, []);

  return (
    <>
      {itemHover ? <ItemHover itemHover={itemHover} /> : null}
      <Menu props={menuProps} />
      <MainWindow
        props={channelProps}
        passRef={mainWindowRef}
        handleRequest={handleRequest}
        channelMessage={channelMessage}
      />
      <AnimatePresence>
        <motion.div className="left" ref={leftRef}>
          {!layout.left ? (
            <Panel
              className="subscribers"
              setItemHover={setItemHover}
              onClick={handleFoldElement}
              height={getTotalHeight()}
              status={
                minimizedElement.leftSidePanels.find(
                  element => element.id === "subscribers"
                ).value
              }
              items={names1}
            />
          ) : null}
          {!layout.left ? (
            <Panel
              className="friends"
              setItemHover={setItemHover}
              onClick={handleFoldElement}
              height={getTotalHeight()}
              status={
                minimizedElement.leftSidePanels.find(
                  element => element.id === "friends"
                ).value
              }
              items={names2}
            />
          ) : null}
          {!layout.left ? (
            <Panel
              className="messages"
              setItemHover={setItemHover}
              onClick={handleFoldElement}
              height={getTotalHeight()}
              status={
                minimizedElement.leftSidePanels.find(
                  element => element.id === "messages"
                ).value
              }
              items={messages}
            />
          ) : null}
        </motion.div>
      </AnimatePresence>
      <motion.div className="right" ref={rightRef}>
        {!layout.right ? (
          <Panel
            className="channels"
            setItemHover={setItemHover}
            onClick={handleFoldElement}
            height={getTotalHeight()}
            status={
              minimizedElement.rightSidePanels.find(
                element => element.id === "channels"
              ).value
            }
            items={chans || []}
          />
        ) : null}
      </motion.div>
      <motion.div
        className="dom-expand-left"
        id="left"
        onClick={handleLayoutChange}
        variants={leftLayoutVariants}
        initial="close"
        animate={layout.left ? "open" : "close"}
      >
        <BsBackspaceFill />
      </motion.div>
      <motion.div
        className="dom-expand-right"
        id="right"
        onClick={handleLayoutChange}
        variants={rightLayoutVariants}
        initial="close"
        animate={layout.right ? "open" : "close"}
      >
        <BsBackspaceReverseFill />
      </motion.div>

      {errorMessage ? (
        <Error className="chaterror" onClick={handleCloseError}>
          {errorMessage}
        </Error>
      ) : null}
    </>
  );
};

export default Main;
