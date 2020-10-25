import React from "react";

//import usePrecheck from "../hooks/usePrecheck";

export const withPrecheck = Component => ({ precheck, usePre }) =>
  precheck === false ? (
    <Component usePre={usePre} precheck={precheck} />
  ) : (
    <p>{precheck}</p>
  );

//precheck === false ? <Precheck usePre={usePre} /> : console.log("null");

export const withLoggedIn = Component => (auth, precheck) =>
  precheck === "Logged in" ? (
    <Component precheck={precheck} auth={auth} />
  ) : null;

export const withLoginForm = Component => (precheck, handleLoginDom) =>
  precheck === "Login or create account" ? (
    <Component handleLoginDom={handleLoginDom} />
  ) : null;

export const withAuthTrue = Component => (precheck, auth) =>
  auth === true ? <Component /> : null;
