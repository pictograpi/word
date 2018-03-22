import React, { Component } from "react";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";

export default class Editor extends Component {
  render() {
    return (
      <Grid container alignItems="center" justify="center" spacing={24}>
        <Grid item xs={11} sm={9} margin="normal">
          <TextField id="name" label="Título" margin="normal" />
          <TextField
            id="multiline-flexible"
            label="Comienza a escribir aquí"
            multiline
            fullWidth
            rowsMax="4"
            margin="normal"
          />
        </Grid>
      </Grid>
    );
  }
}
