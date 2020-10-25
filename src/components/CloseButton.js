import React from "react";

const CloseButton = ({ id, close, onClick }) => (
  <div id={id} onClick={onClick} className="close-btn">
    {close}
  </div>
);

export default CloseButton;
