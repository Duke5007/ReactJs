import React, { Component } from "react";
import "./App.css";
import Tables from "./Tables/Tables.js";
import Entry from "./Entry/Entry.jsx";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import history from "./history";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f44336"
    }
  }
});
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <button onClick={() => history.push("/Tables")} className="btn">
            Таблица
          </button>
          <button onClick={() => history.push("/Entry")} className="btn">
            Вход
          </button>
          <Router history={history}>
            <Switch>
              <Route path="/Tables" render={() => <Tables />} />
              <Route path="/Entry" render={() => <Entry theme={theme} />} />
            </Switch>
          </Router>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
