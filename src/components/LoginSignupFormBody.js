import React from "react";
import Tab from "./Tab";
import Button from "./Button";
import Input from "./Input";

const LoginSignupFormBody = ({
  onSubmit,
  onChange,
  value,
  formType,
  setFormType,
  result,
  handleFormSwitch,
  className,
}) => {
  return (
    <>
      <Tab
        id="login"
        className="login"
        setFormType={setFormType}
        handleFormSwitch={handleFormSwitch}
      >
        Login
      </Tab>

      <Tab
        id="signup"
        className="signup"
        setFormType={setFormType}
        handleFormSwitch={handleFormSwitch}
      >
        Signup
      </Tab>

      <form onSubmit={onSubmit} className={className}>
        <Input
          className="username form-input"
          type="text"
          placeholder="Username"
          name="username"
          value={value.username}
          onChange={onChange}
        />
        {formType === "signup" ? (
          <Input
            className="email form-input"
            type="email"
            placeholder="email"
            name="email"
            value={value.email}
            onChange={onChange}
          />
        ) : null}
        <Input
          className="password form-input"
          type="password"
          placeholder="Password"
          name="password"
          value={value.password}
          onChange={onChange}
        />

        {result ? (
          <p className="login-result">{result}</p>
        ) : (
          <p className="login-result">Nothing</p>
        )}
        <Button type="submit" className="submit-button">
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginSignupFormBody;
