import React from "react";

const useLayout = switchLayout => {
  const [layout, setLayout] = React.useState({
    left: false,
    right: false,
  });

  React.useEffect(() => {
    if (layout.left && layout.right) switchLayout("all");
    if (layout.left && !layout.right) switchLayout("left-center");
    if (!layout.left && layout.right) switchLayout("right-center");
    if (!layout.left && !layout.right) switchLayout("center");
  }, [layout, switchLayout]);

  return { layout, setLayout };
};

export default useLayout;
