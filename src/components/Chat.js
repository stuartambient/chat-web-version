import React from "react";
import Main from "./Main";
import "../style/Chat.css";
import useChat from "../hooks/useChat";

/* const electron = window.require("electron");
const { ipcRenderer } = electron; */

const Chat = ({ precheck, switchLayout }) => {
  const { handleRequest, eventResponse } = useChat();

  return (
    <Main
      handleRequest={handleRequest}
      eventResponse={eventResponse}
      switchLayout={switchLayout}
    />
  );
};

export default Chat;
