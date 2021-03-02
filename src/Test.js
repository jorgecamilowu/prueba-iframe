import React from "react";
import { useContext, useEffect } from "react";
import { StatusDispatchContext } from "./App";

const Test = () => {
  const dispatch = useContext(StatusDispatchContext);
  useEffect(() => {
    dispatch({ type: "notification", payload: "success" });
    window.parent.postMessage("close", "*");
  }, []);
  return <div />;
};

export default Test;
