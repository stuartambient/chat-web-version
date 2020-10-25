import React from "react";
import generateId from "../helpers/generateId";

const useMain = (
  selectedMenuItem,
  setSelected,
  setAddChannel,
  handleRequest,
  setChannel,
  addChannel,
  unsubscribe,
  setUnsubscribe
) => {
  React.useEffect(() => {
    if (selectedMenuItem.addChannel) {
      handleRequest({
        type: "addChannel",
        value: selectedMenuItem.addChannel,
      });
      setSelected({ addChannel: undefined });
      return setAddChannel(false);
    }
  }, [selectedMenuItem, handleRequest, setSelected, setAddChannel]);

  React.useEffect(() => {
    const joinChannel = channel => {
      return setChannel({
        type: "JOIN_CHANNEL",
        payload: {
          key: generateId(),
          id: `${channel}`,
          tabclassname: "tab",
          viewclassname: "view",
          tabname: `${channel}`,
          viewname: `${channel}`,
          close: "💨",
          view: false,
          addclass: false,
        },
      });
    };

    if (addChannel) {
      joinChannel(addChannel);
    }
  }, [addChannel, setChannel]);

  React.useEffect(() => {
    if (unsubscribe) {
      console.log(unsubscribe);
      handleRequest({ type: "unsubscribe", value: unsubscribe });
      return setUnsubscribe(false);
    }
  }, [unsubscribe, handleRequest, setUnsubscribe]);

  React.useEffect(() => {
    if (selectedMenuItem.currentNavItem) {
      handleRequest({ type: selectedMenuItem.currentNavItem });
      setSelected({ currentNavItem: "" });
    }
  }, [handleRequest, selectedMenuItem.currentNavItem, setSelected]);
};

export default useMain;
