import React from "react";

const Span = ({ className, children, props }) => {
  console.log(props);
  return <span className={className}>{children}</span>;
};

export default Span;
