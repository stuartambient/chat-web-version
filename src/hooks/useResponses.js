import React from "react";

const useResponses = eventResponse => {
  const [, /* authenticated */ setAuthenticated] = React.useState(false);
  const [chans, setChans] = React.useState("");
  const [addChannel, setAddChannel] = React.useState(false);
  const [channelMessage, setChannelMessage] = React.useReducer(
    (state, action) => {
      console.log(action.value);
      switch (action.type) {
        case "add":
          return [...state, action.value];
        default:
          return;
      }
    },
    []
  );
  const [errorMessage, setErrorMessage] = React.useState(false);
  React.useEffect(() => {
    if (eventResponse) {
      const { event, response } = eventResponse;
      switch (event) {
        case "authenticated":
          return setAuthenticated(true);
        case "subscription:confirmed":
          setErrorMessage(`subscribed to ${response}`);
          return setAddChannel(response);
        case "subscription:cancelled":
          return setErrorMessage(response);
        case "send:rooms":
          console.log("send-rooms");
          return setChans(response);
        case "already:subscribed":
        case "already:exists":
          return setErrorMessage(response);
        case "published":
          /*const { client, channel, message } = response;
          const id = generateId();
          const newMessage = [...channelMessage];
          newMessage.push({ id, client, channel, message }); */
          return setChannelMessage({ type: "add", value: response });
        /*  return console.log(response); */

        default:
          return;
      }
    }
  }, [eventResponse]);

  return {
    chans,
    addChannel,
    setAddChannel,
    channelMessage,
    errorMessage,
    setErrorMessage,
  };
};

export default useResponses;
