import React from "react";
import useMenu from "../hooks/useMenu";

const Channel = () => {
  const { sub } = useMenu();
  console.log(sub);
  return (
    <>
      <p></p>
    </>
  );
};

export default Channel;
