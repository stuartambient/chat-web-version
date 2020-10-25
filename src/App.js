import React from "react";
import "./style/App.css";
import Chat from "./components/Chat";
import LoginSignupForm from "./components/LoginSignupForm";
import Precheck from "./components/Precheck";
import Welcome from "./components/Welcome";
import Error from "./components/Error";
import usePrecheck from "./hooks/usePrecheck";
import { AnimateSharedLayout } from "framer-motion";

const App = () => {
  const [signup, setSignup] = React.useState(false);
  const [precheck, setPrecheck] = React.useState(false);
  const [res, setRes] = React.useState(false);
  const [layout, switchLayout] = React.useState("center");

  const handleLoginDom = e => {
    setPrecheck("authorized");
  };

  const handleSignupDom = e => {
    setSignup(true);
    setPrecheck("completed");
  };

  const handleFormType = type => {
    type === "login" ? handleLoginDom() : handleSignupDom();
  };

  const usePre = () => {
    const pre = usePrecheck();
    pre
      .then(result => setPrecheck(result))
      .catch(error => console.log("error: ", error));
  };

  /*  const handleDisconnect = () => {
    setDisconnected(true);
  }; */

  const props = {
    precheck: precheck,
    usePre: usePre,
    handleFormType: handleFormType,
    signup: signup,
    res: res,
    setRes: setRes,
    /* layout: layout,
    setLayout: setLayout, */
    layout: layout,
    switchLayout: switchLayout,
  };

  const ReturnDom = (classname, status) => {
    return <Container props={props} status={status} className={classname} />;
  };

  const cname = classname => `container ${classname}`;

  return (
    <>
      {precheck === false ? ReturnDom(cname("precheck"), "precheck") : null}
      {precheck === "Logged in" || precheck === "authorized"
        ? ReturnDom(cname("chat"), "chat")
        : null}
      {precheck === "Login or create account"
        ? ReturnDom(cname("form"), "form")
        : null}
      {signup === true ? ReturnDom(cname("welcome"), "welcome") : null}
    </>
  );
};

export default App;

const Container = ({ props, className, status }) => {
  return (
    <AnimateSharedLayout>
      <div className={className} data-layout={props.layout}>
        {status === "form" ? (
          <Error className="error" precheck={props.precheck} />
        ) : null}

        {
          {
            precheck: <Precheck usePre={props.usePre} />,
            form: (
              <LoginSignupForm
                handleFormType={props.handleFormType}
              ></LoginSignupForm>
            ),
            chat: (
              <Chat
                precheck={props.precheck}
                switchLayout={props.switchLayout}
                /* res={props.res}
              setRes={props.setRes} */
              />
            ),
            welcome: <Welcome signup={props.signup} />,
          }[status]
        }
      </div>
    </AnimateSharedLayout>
  );
};
