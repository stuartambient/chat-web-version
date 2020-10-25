import React from "react";
/* import Channel from "../components/Channel"; */

const useMenu = () => {
  const [selectedMenuItem, setSelected] = React.useState({
    currentNavItem: "",
    addChannel: undefined,
    searchChannels: undefined,
  });

  const [toggleInput, setToggleInput] = React.useState(false);

  React.useEffect(() => {
    if (selectedMenuItem.addChannel) {
      setFieldValue({
        type: "clear-add-field",
      });
    }
    if (selectedMenuItem.searchChannels) {
      setFieldValue({
        type: "clear-search-field",
      });
    }
  }, [selectedMenuItem.addChannel, selectedMenuItem.searchChannels]);

  const initialNavFormVals = {
    addchannel: "",
    searchchannel: "",
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "add-channel":
        return {
          ...state,
          addchannel: action.value,
        };
      case "search-channels":
        return {
          ...state,
          searchchannel: action.value,
        };
      case "clear-add-field":
        return {
          ...state,
          addchannel: "",
        };
      case "clear-search-field":
        return {
          ...state,
          searchchannel: "",
        };
      default:
        return state;
    }
  };

  const [fieldValue, setFieldValue] = React.useReducer(
    chatReducer,
    initialNavFormVals
  );

  const handleSubmit = e => {
    e.preventDefault();
    switch (e.target.id) {
      case "add-channel":
        setSelected({ addChannel: fieldValue.addchannel });
        setToggleInput(true);
        return;
      case "search-channels":
        setSelected({ searchChannels: fieldValue.searchchannel });
        setToggleInput(true);
        return;
      default:
        return;
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFieldValue({
      type: name,
      value,
    });
  };

  const handleNoFormNav = e => {
    setSelected({ currentNavItem: e.target.id });
  };

  return {
    fieldValue,
    handleChange,
    handleSubmit,
    setSelected,
    selectedMenuItem,
    handleNoFormNav,
    toggleInput,
    setToggleInput,
  };
};

export default useMenu;
