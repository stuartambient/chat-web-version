import React from "react";

const HoverText = ({ className, hoveringId }) => (
  <div className={className}>
    <span>{hoveringId}</span>
  </div>
);

export default HoverText;
