import React, { Component } from "react";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Pictograph from "./pictograph";
import "./preview.pcss";

export default class Preview extends Component {
  render() {
    return (
      <Grid
        className="w-preview"
        container
        alignItems="center"
        justify="center"
        spacing={24}
      >
        <Grid item xs={11} sm={9} margin="normal">
          <Typography variant="headline">Previsualización</Typography>
        </Grid>
        <Grid item xs={11} sm={9} margin="normal">
          <Grid container alignItems="center" spacing={24}>
            <Pictograph />
            <Pictograph />
            <Pictograph />
            <Pictograph />
            <Pictograph />
            <Pictograph />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
