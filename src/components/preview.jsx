import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Pictograph from "./pictograph";

const styles = theme => ({
  preview: {
    paddingTop: "2%"
  }
});

class Preview extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        className={classes.preview}
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

export default withStyles(styles)(Preview);
