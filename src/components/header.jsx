import React, { Component } from "react";
import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import Mail from "material-ui-icons/Mail";
import "./header.pcss";

export default class Header extends Component {
  render() {
    return (
      <AppBar className="w-header" position="sticky">
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            className="w-header--logo"
          >
            PictograpiWord
          </Typography>
          <IconButton color="inherit" aria-label="Contact">
            <Mail />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}
