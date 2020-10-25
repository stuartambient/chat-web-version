import React from "react";

const useMinimize = () => {
  const [minimizedElement, setMinimizeElement] = React.useReducer(
    (state, action) => {
      const { value } = action;
      switch (action.type) {
        case "left":
          return {
            ...state,
            leftSidePanels: state.leftSidePanels.map(panel => {
              if (panel.id === value) {
                return {
                  ...panel,
                  value: !panel.value,
                };
              } else {
                return panel;
              }
            }),
          };

        case "right":
          return {
            ...state,
            rightSidePanels: state.rightSidePanels.map(panel => {
              if (panel.id === value) {
                return {
                  ...panel,
                  value: !panel.value,
                };
              } else {
                return panel;
              }
            }),
          };
        default:
          return;
      }
    },
    {
      leftSidePanels: [
        { id: "subscribers", value: false },
        { id: "friends", value: false },
        { id: "messages", value: false },
      ],
      rightSidePanels: [{ id: "channels", value: false }],
    }
  );
  return { minimizedElement, setMinimizeElement };
};

export default useMinimize;
