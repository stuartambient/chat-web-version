import React from "react";
import io from "socket.io-client";
import socketRequests from "../constants/socketRequests";
import generateId from "../helpers/generateId";

const useChat = () => {
  const [client, setClient] = React.useState(null);
  const [, /* clientConnected */ setClientConnected] = React.useState(false);
  const [eventResponse, setEventResponse] = React.useState(false);

  /*   React.useEffect(() => {
    if (eventResponse.responses.length > 0) console.log("ev: ", eventResponse);
  }); */

  React.useEffect(() => {
    if (eventResponse) console.log("ev: ", eventResponse);
  }, [eventResponse]);

  /* const responseReducer = (state, action) => {
    const id = generateId();
    const checkEvent = state.responses.filter(e => e.event === action.event);

    if (checkEvent.length > 0) {
      return {
        ...state,
        responses: state.responses
          .map(res => {
            if (res.event === action.event) {
              return { ...res, response: action.response };
            }
            return res;
          })
          .filter(e => e.event !== "already:exists"),
      };
    } else {
      return {
        ...state,
        responses: state.responses.concat({ id, ...action }),
      };
    }
  };

  const [eventResponse, dispatch] = React.useReducer(responseReducer, {
    responses: [],
  }); */

  React.useEffect(() => {
    setClient(
      io("http://localhost:8000", {
        autoConnect: false,
      })
    );
  }, []);

  const dispatchEvent = React.useCallback((event, response) => {
    const id = generateId();
    setEventResponse({
      id,
      event: event,
      response: response,
    });
  }, []);

  React.useEffect(() => {
    if (!client) return;
    client.open();
    client.on("connect", () =>
      client.emit("authentication", { status: "authorized" })
    );
    client.on("authenticated", msg => {
      if (msg) {
        setClientConnected(client.connected);
        /* console.log(clientConnected); */
      }
    });
    client.on("authenticated", msg => dispatchEvent("authenticated", msg));
    client.on("disconnected", () => {
      setClientConnected(client.disconnected);
    });
    client.on("already:logged:in", msg =>
      dispatchEvent("already:logged:in", msg)
    );
    client.on("unauthorized", msg => dispatchEvent("unauthorized", msg));

    client.on("subscription:confirmed", msg =>
      dispatchEvent("subscription:confirmed", msg)
    );
    client.on("subscription:cancelled", msg =>
      dispatchEvent("subscription:cancelled", msg)
    );
    client.on("already:subscribed", msg =>
      dispatchEvent("already:subscribed", msg)
    );
    client.on("already:exists", msg => dispatchEvent("already:exists", msg));
    client.on("send:rooms", msg => dispatchEvent("send:rooms", msg));

    client.on("published", msg => dispatchEvent("published", msg));

    client.on("user:found", msg => dispatchEvent("user:found", msg));
    client.on("notify:entered:room", msg =>
      dispatchEvent("notify:entered:room", msg)
    );
    client.on("notify:left:room", msg =>
      dispatchEvent("notify:left:room", msg)
    );
  }, [client, dispatchEvent]);

  const handleRequest = req => {
    /* console.log(req.type, req.value); */
    const { type, value } = req;
    return client.emit(socketRequests[type], value);
  };

  return {
    handleRequest,
    eventResponse,
  };
};

export default useChat;
