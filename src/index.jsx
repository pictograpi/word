import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import CssBaseline from "material-ui/CssBaseline";
import Store from "./reducers/index";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./views/home";

render(
  <BrowserRouter>
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Menu />
      <Route path="/" component={Home} />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("app-container")
);
