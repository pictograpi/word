import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import CssBaseline from "material-ui/CssBaseline";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./views/home";
import Store from "./reducers/index";

render(
  <Provider store={Store}>
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Menu />
        <Route path="/" component={Home} />
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById("app-container")
);
