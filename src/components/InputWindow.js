import React from "react";
import { FiSend } from "react-icons/fi";
import TextArea from "./TextArea";
import Button from "./Button";
import Form from "./Form";

const InputWindow = ({
  id,
  onSubmit,
  onChange,
  className,
  viewName,
  value,
  name,
}) => (
  <div className="inputwindow">
    <Form id={viewName} onSubmit={onSubmit} className="chat-input">
      <TextArea
        id="chat-input-area"
        rows="3"
        cols="50"
        onChange={onChange}
        value={value}
        name={name}
      />
      <Button type="submit">
        <span>
          <FiSend />
        </span>
      </Button>
    </Form>
  </div>
);

export default InputWindow;
