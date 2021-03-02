import React, { useContext, useEffect } from "react";
import { Collapse } from "@material-ui/core";
import { StatusContext } from "./App";
import "./inicio.css";

const Inicio = () => {
  const state = useContext(StatusContext);
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log(event);
      // if (event.origin === "http://localhost:3000" && event.data === "close") {
      if (event.data === "close") {
        setOpen(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <button onClick={() => alert(state.status)}>Get Status</button>
      <h1>IFrame Client Demo</h1>
      <Collapse in={open}>
        <iframe title="Iframe Test" src={state.url} className="frame" />
      </Collapse>
    </div>
  );
};

export default Inicio;
