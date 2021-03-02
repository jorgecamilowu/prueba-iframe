import React, { useState, useContext } from "react";
import {
  TextField,
  Button,
  Grid,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { StatusDispatchContext } from "./App";

const Main = () => {
  const [input, setInput] = useState("");
  const history = useHistory();
  const dispatch = useContext(StatusDispatchContext);

  function handleOnNext(e) {
    dispatch({ type: "url", payload: input });
    history.push("/inicio");
  }

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <TextField
          defaultValue={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleOnNext}>Next</Button>
      </Grid>
    </Grid>
  );
};

export default Main;
