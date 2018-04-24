import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from 'redux-promise';

import reducers from "./redux/reducers";
import indexRoutes from "routes/index.jsx";

import "assets/scss/material-dashboard-pro-react.css";
import { ActionSearch } from "material-ui";
// let hashHistory = Router.hashHistory;

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={ createStoreWithMiddleWare(reducers)}>
    <Router history={hist}>
      <HashRouter>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
          })}
        </Switch>
      </HashRouter>
    </Router>
  </Provider>,
  document.getElementById("root")
);




