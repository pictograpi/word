import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
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
import { connect } from "react-redux";
import { togglePreview } from "reducers/preview";

const styles = theme => ({
  preview: {
    flexGrow: 1,
    justifyContent: "flex-end",
    display: "flex"
  }
});

const mapStateToProps = (state, ownProps) => {
  return { isPreviewActive: state.preview.active };
};

const mapDispatchToProps = dispatch => {
  return {
    onPreviewToggle: () => dispatch(togglePreview())
  };
};

class Menu extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="sticky" color="default">
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
          <div className={classes.preview}>
            <FormControlLabel
              onChange={this.props.onPreviewToggle}
              control={
                <Switch
                  checked={this.props.isPreviewActive}
                  value="isPreview"
                  color="primary"
                />
              }
              label="Preview"
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Menu)
);
