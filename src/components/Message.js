import React from 'react';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import marked from 'marked';
/* const { shell } = window.require('electron'); */

/* const ReactMarkdown = require("react-markdown"); */

/* marked.setOptions({
  renderer: new marked.Renderer(),
}); */

const disallowed = [
  'table',
  'tableHead',
  'tableBody',
  'tableRow',
  'tableCell',
  'html',
  'virtualHtml',
  'parsedHtml',
];
const Message = ({ name, message }) => {
  /*   const handleLinkClick = e => {
    e.preventDefault();
    e.persist();
    shell.openExternal(e.target.href);
  }; */

  return (
    <div className="message">
      <span className="message-name">{name}</span>
      {message.startsWith('http://') || message.startsWith('https://') ? (
        <span className="message-msg">
          <a
            href={
              message
            } /* onClick={e => handleLinkClick(e, e.target.href)} */
          >
            {message}
          </a>
        </span>
      ) : (
        <p className={'message-msg'} disallowedTypes={disallowed}>
          {message}
        </p>
      )}
      <span className="message-icon">
        <IoMdRemoveCircleOutline />
      </span>
    </div>
  );
};

export default Message;
