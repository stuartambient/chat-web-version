const socketRequests = {
  entered: "entered:room",
  left: "left:room",
  unsubscribe: "unsubscribe",
  "all-channels": "get:rooms",
  "my-messages": "my:messsages",
  "my-account": "my:account",
  addChannel: "subscribe",
  searchChannels: "search:channels",
  searchUsers: "search:users",
  channelUsers: "get:channel:users",
  friends: "get:friends",
  publish: "publish",
};

export default socketRequests;
