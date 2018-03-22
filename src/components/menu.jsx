import React, { Component } from "react";
import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import Print from "material-ui-icons/Print";
import CompareArrows from "material-ui-icons/CompareArrows";
import CropSquare from "material-ui-icons/CropSquare";
import FontDownload from "material-ui-icons/FontDownload";
import { FormControlLabel } from "material-ui/Form";
import Switch from "material-ui/Switch";
import Share from "material-ui-icons/Share";

import "./menu.pcss";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPreview: false
    };
  }

  handleChangeIsPreview() {
    this.setState({ isPreview: !this.state.isPreview });
  }

  render() {
    return (
      <AppBar className="w-menu" position="sticky" color="default">
        <Toolbar>
          <IconButton color="inherit" aria-label="Print">
            <Print />
          </IconButton>
          <IconButton color="inherit" aria-label="Join">
            <CompareArrows />
          </IconButton>
          <IconButton color="inherit" aria-label="Border">
            <CropSquare />
          </IconButton>
          <IconButton color="inherit" aria-label="Font">
            <FontDownload />
          </IconButton>
          <IconButton color="inherit" aria-label="Print">
            <Share />
          </IconButton>
          <div className="w-menu--separator" />
          <FormControlLabel
            control={
              <Switch
                onChange={() => this.handleChangeIsPreview()}
                checked={this.state.isPreview}
                value="isPreview"
                color="primary"
              />
            }
            label="Previsualizar"
          />
        </Toolbar>
      </AppBar>
    );
  }
}
