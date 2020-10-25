import React from "react";
import Axios from "axios";

import "../style/LoginSignupForm.css";
import LoginSignupFormBody from "./LoginSignupFormBody";

const LoginSignupForm = ({ handleFormType }) => {
  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };

  const initialState = { username: "", email: "", password: "" };

  const [values, setValues] = React.useReducer(reducer, initialState);
  const [data, setData] = React.useState("");
  const [result, setResult] = React.useState(undefined);
  const [formType, setFormType] = React.useState("login");

  const serverRoutes = {
    login: "http://localhost:8000/logMeIn",
    signup: "http://localhost:8000/signMeUp",
  };

  const handleSubmit = event => {
    event.preventDefault();
    setData(values);
  };

  const handleFormSwitch = () => {
    setValues(initialState);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ [name]: value });
  };

  const handleLogin = React.useCallback(async () => {
    let url;
    formType === "login"
      ? (url = serverRoutes.login)
      : (url = serverRoutes.signup);
    try {
      const res = await Axios({
        method: "POST",
        url: `${url}`,
        data: {
          data,
        },
        withCredentials: true,
      });
      if (res) {
        console.log("status: ", res.status);
        console.log("signup res: ", res.data.msg);
        console.log("res data status: ", res.data);
        setResult(res.data.status);
        setValues(initialState);
        handleFormType(formType);
      }
    } catch (err) {
      console.log("form error", err.response);
      const { error } = err.response.data;
      setResult(error);
      setValues(initialState);
    }
  }, [data, initialState, handleFormType, serverRoutes, formType]);

  React.useEffect(() => {
    if (data) {
      handleLogin();
      setData(undefined);
    }
  }, [handleLogin, data]);

  let formStyleClass;
  formType === "login"
    ? (formStyleClass = "login-form")
    : (formStyleClass = "signup-form");

  return (
    <LoginSignupFormBody
      onSubmit={handleSubmit}
      onChange={handleChange}
      value={values}
      formType={formType}
      setFormType={setFormType}
      result={result}
      handleFormSwitch={handleFormSwitch}
      className={formStyleClass}
    />
  );
};

export default LoginSignupForm;
