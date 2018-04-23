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
import { setBorderVisible, setTextVisible } from "reducers/editor";

const styles = theme => ({
  preview: {
    flexGrow: 1,
    justifyContent: "flex-end",
    display: "flex"
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    isPreviewActive: state.preview.active,
    isBorderVisible: state.editor.borderVisible,
    isTextVisible: state.editor.textVisible
  };
};

const mapDispatchToProps = dispatch => ({
  handlPreviewClick: () => dispatch(togglePreview()),
  handleBorderClick: value => dispatch(setBorderVisible(value)),
  handleTextClick: value => dispatch(setTextVisible(value))
});

class Menu extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="sticky" color="default">
        <Toolbar>
          <IconButton color="inherit" aria-label="Print" disabled>
            <Print />
          </IconButton>
          <IconButton color="inherit" aria-label="Join" disabled>
            <CompareArrows />
          </IconButton>
          <IconButton
            onClick={() => this.props.handleBorderClick(!this.props.isBorderVisible)}
            color={this.props.isBorderVisible ? "primary" : "inherit"}
            aria-label="Border"
          >
            <CropSquare />
          </IconButton>
          <IconButton
            color={this.props.isTextVisible ? "primary" : "inherit"}
            aria-label="Font"
            onClick={() => this.props.handleTextClick(!this.props.isTextVisible)}
          >
            <FontDownload />
          </IconButton>
          <IconButton color="inherit" aria-label="Share" disabled>
            <Share />
          </IconButton>
          <div className={classes.preview}>
            <FormControlLabel
              onChange={this.props.handlPreviewClick}
              control={<Switch checked={this.props.isPreviewActive} value="isPreview" color="primary" />}
              label="Preview"
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Menu));
