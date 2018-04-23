import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Pictograph from "./pictograph";
import { connect } from "react-redux";

const styles = theme => ({
  preview: {
    paddingTop: "2%"
  }
});

const mapStateToProps = (state, ownProps) => {
  return { text: state.article.text };
};

class Preview extends Component {
  render() {
    const { classes } = this.props;
    const pictographsDom = this.props.text.split(" ").map((word, index) => {
      return <Pictograph key={`${index}-${word}`} word={word} index={index} />;
    });

    return (
      <Grid className={classes.preview} container alignItems="center" justify="center" spacing={24}>
        <Grid item xs={11} sm={9} margin="normal">
          <Typography variant="headline">Preview</Typography>
        </Grid>
        <Grid item xs={11} sm={9} margin="normal">
          <Grid container alignItems="center" spacing={24}>
            {pictographsDom}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(connect(mapStateToProps)(Preview));
