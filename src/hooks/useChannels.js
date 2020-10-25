import React from "react";
/* import initialChannels from "../constants/initialChannels"; */

const useChannels = () => {
  const channelReducer = (state, action) => {
    switch (action.type) {
      case "JOIN_CHANNEL":
        console.log("action id", action);
        return {
          ...state,
          channelList: state.channelList.concat({ ...action.payload }),
        };
      case "SWITCH_CHANNEL_VIEW":
        console.log("action id", action);
        return {
          ...state,
          channelList: state.channelList.map(chan => {
            if (chan.id === action.id) {
              return { ...chan, view: true, addclass: action.id };
            } else {
              return { ...chan, view: false, addclass: false };
            }
          }),
        };

      case "CLOSE_CHANNEL":
        return {
          ...state,
          channelList: state.channelList.filter(chan => chan.id !== action.id),
        };

      /*       case "CHECK_ACTIVE_VIEW":
        return {
          ...state,
          channelList: state.channelList.map(chan => {
            if (chan.id === action.id && chan.view === true) {
              console.log("true");
              return { ...chan, chan };
            }
            return { ...chan, chan };
          }),
        }; */
      default:
        return new Error("something went wrong");
    }
  };

  const [channels, setChannel] = React.useReducer(channelReducer, {
    channelList: [],
    addclass: false,
    showBlankView: false,
  });

  const [unsubscribe, setUnsubscribe] = React.useState(false);

  React.useEffect(() => {
    if (channels.channelList.length === 0) channels.showBlankView = true;
  }, [channels]);

  const handleViewChange = e => {
    e.stopPropagation();
    console.log("handleViewChange: ", e.target.id);
    channels.showBlankView = false;
    setChannel({
      type: "SWITCH_CHANNEL_VIEW",
      id: e.target.id,
    });
    return;
  };

  const handleCloseTab = e => {
    const checkViewStatus = channels.channelList.find(
      chan => chan.id === e.target.id
    );
    setUnsubscribe(checkViewStatus.tabname);
    if (checkViewStatus.view) channels.showBlankView = true;

    setChannel({
      type: "CLOSE_CHANNEL",
      id: e.target.id,
    });
  };

  return {
    channels,
    setChannel,
    handleViewChange,
    handleCloseTab,
    unsubscribe,
    setUnsubscribe,
  };
};

export default useChannels;
