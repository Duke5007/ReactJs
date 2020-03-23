import React from "react";
import { Button } from "@material-ui/core";
import style from "./entry.module.css";
import { ThemeProvider } from "@material-ui/core";

function Entry(props) {
  return (
    <div className={style.main}>
      <div>
        <input type="text" placeholder="Login"></input>
      </div>
      <div>
        <input type="text" placeholder="Password"></input>{" "}
      </div>
      <div className={style.btn}>
        <ThemeProvider theme={props.theme}>
          <Button variant="contained" color="primary">
            Войти
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Entry;
