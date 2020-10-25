import React from "react";

const MessagesWindow = ({ id, className, children, ref }) => (
  <div className={className} id={id}>
    {children}
  </div>
);

export default MessagesWindow;
