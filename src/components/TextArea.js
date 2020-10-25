import React from "react";

const TextArea = ({ id, onChange, rows, cols, value, name }) => (
  <textarea
    id={id}
    rows={rows}
    cols={cols}
    value={value}
    name={name}
    form="chat-input"
    onChange={onChange}
  ></textarea>
);

export default TextArea;
