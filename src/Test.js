import React from "react";
import { useContext, useEffect } from "react";
import { StatusDispatchContext } from "./App";

const Test = () => {
  const dispatch = useContext(StatusDispatchContext);
  useEffect(() => {
    dispatch({ type: "notification", payload: "success" });
    window.parent.postMessage("close", "http://localhost:3000");
  }, []);
  return <div />;
};

export default Test;
