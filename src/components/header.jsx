import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import Mail from "material-ui-icons/Mail";

const styles = theme => ({
  flex: {
    flexGrow: 1
  },
  logo: {
    flex: 1
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.logo}>
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

export default withStyles(styles)(Header);
