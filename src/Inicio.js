import React, { useContext, useEffect } from "react";
import { Collapse } from "@material-ui/core";
import { StatusContext } from "./App";
import "./inicio.css";

const Inicio = () => {
  // const link = `https://ecomdevfe.telered.com.pa:7433/?commerce_id=680000246&description=Compra%20eCommerce&membership_req_id=8527&session_id=74d50e1f-b92c-48f6-b01c-70ee0ea6e07f&actions=3&currency=USD&amount=110&pin_validation_req_id=9731&correlation_id=2351ad09-1ada-425b-8fbb-5258427f1dc0&return_url=https%3A%2F%2Fwww.google.com%3Fsession_id%3D74d50e1f-b92c-48f6-b01c-70ee0ea6e07f`;
  const state = useContext(StatusContext);
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log(event);
      if (event.origin === "http://localhost:3000" && event.data === "close") {
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
