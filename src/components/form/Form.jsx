import React from "react";
import useStyles from "./styles";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

function Form() {
  const classes = useStyles();
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </>
  );
}

export default Form;
