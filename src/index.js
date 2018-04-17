import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Router, Route, Switch } from "react-router-dom";
import indexRoutes from "routes/index.jsx";
import "assets/scss/material-dashboard-pro-react.css";
// let hashHistory = Router.hashHistory;

const hist = createBrowserHistory();

ReactDOM.render(

<Router history={hist}>
  <HashRouter>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
    </HashRouter>
  </Router>,
  document.getElementById("root")
);
