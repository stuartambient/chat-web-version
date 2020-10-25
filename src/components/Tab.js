import React from "react";
import "../style/Tab.css";

const Tab = ({
  id,
  className,
  setFormType,
  handleFormSwitch,
  children,
  onDoubleClick,
  tabName,
}) => {
  /* console.log(setFormType); */

  const handleClick = e => {
    setFormType(e.target.id);
    handleFormSwitch();
  };

  return onDoubleClick ? (
    <div className={className}>
      <span className="channel-name" onDoubleClick={onDoubleClick} id={id}>
        {tabName}
      </span>
      {children}
    </div>
  ) : (
    <div id={id} className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Tab;
