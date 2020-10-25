import React from "react";
/* import ScrollBooster from "scrollbooster"; */
import Tab from "./Tab";
import CloseButton from "./CloseButton";
import ChannelView from "./ChannelView";
import Title from "./Title";
import Message from "./Message";
import MessagesWindow from "./MessagesWindow";
import InputWindow from "./InputWindow";
import { motion } from "framer-motion";
import { useScrollBoost } from "react-scrollbooster";
import "../style/MainWindow.css";
import generateId from "../helpers/generateId";

const MainWindow = ({ props, passRef, handleRequest, channelMessage }) => {
  /*   console.log(channelMessage);
  React.useEffect(() => {
    if (channelMessage) {
      channelMessage.forEach(el =>
        console.log(el.channel, el.client, el.message)
      );
    }
  }, [channelMessage]); */

  const [viewport /* scrollbooster */] = useScrollBoost({
    scrollMode: "transform",
    direction: "horizontal",
    inputFocus: false,
    friction: 0.5,
  });

  const [textInput, setInput] = React.useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    handleRequest({
      type: "publish",
      value: { channel: e.target.id, message: textInput },
    });
    return setInput("");
  };

  return (
    <>
      <motion.div className="viewport" ref={viewport} layout>
        <motion.div className="tabs" layout>
          {props.channels.channelList.map((channel, index) =>
            channel.id === channel.addclass ? (
              <Tab
                key={channel.id}
                onDoubleClick={props.handleViewChange}
                className={`${channel.tabclassname} tab-selected`}
                id={channel.id}
                tabName={channel.tabname}
              >
                <CloseButton
                  key={channel.id}
                  id={channel.id}
                  close={channel.close}
                  onClick={props.handleCloseTab}
                />
              </Tab>
            ) : (
              <Tab
                key={channel.id}
                onDoubleClick={props.handleViewChange}
                className={`${channel.tabclassname}`}
                id={channel.id}
                tabName={channel.tabname}
              >
                <CloseButton
                  key={channel.id}
                  id={channel.id}
                  close={channel.close}
                  onClick={props.handleCloseTab}
                />
              </Tab>
            )
          )}
        </motion.div>
      </motion.div>
      <motion.div className="views" layout ref={passRef}>
        {props.channels.showBlankView && (
          <ChannelView
            key="12345"
            className="view blankview"
            id="blank-view"
            viewname="blank-view"
          >
            {new Date().toString()}
          </ChannelView>
        )}
        {props.channels.channelList.map((channel, index) =>
          channel.view === true ? (
            <ChannelView
              key={channel.id}
              className={channel.viewclassname}
              id={channel.id}
              textInput={textInput}
              style={{ display: "grid" }}
            >
              <Title className="chat-title">{channel.viewname}</Title>
              <MessagesWindow className="chats" id={channel.id}>
                {channelMessage.map(msg =>
                  msg.channel === channel.id ? (
                    <Message
                      key={generateId()}
                      name={msg.client}
                      message={msg.message}
                    />
                  ) : null
                )}
              </MessagesWindow>
              <InputWindow
                id={channel.id}
                onSubmit={handleSubmit}
                onChange={handleChange}
                className={channel.viewclassname}
                viewName={channel.viewname}
                value={textInput}
                name="message"
              ></InputWindow>
            </ChannelView>
          ) : (
            <ChannelView
              key={channel.id}
              className={channel.viewclassname}
              id={channel.id}
              style={{ display: "none" }}
            >
              <Title className="chat-title">{channel.viewname}</Title>
              <MessagesWindow className="chats" id={channel.id}>
                {channelMessage.map(msg =>
                  msg.channel === channel.id ? (
                    <Message
                      key={generateId()}
                      name={msg.client}
                      message={msg.message}
                    />
                  ) : null
                )}
              </MessagesWindow>
              <InputWindow
                id={channel.id}
                onSubmit={handleSubmit}
                onChange={handleChange}
                className={channel.viewclassname}
                viewName={channel.viewname}
                value={textInput}
                name="message"
              ></InputWindow>
            </ChannelView>
          )
        )}
      </motion.div>
    </>
  );
};

export default MainWindow;
