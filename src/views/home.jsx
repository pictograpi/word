import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Editor from "components/editor";
import Preview from "components/preview";

const styles = {};

class Home extends Component {
  render() {
    return <Preview />;
  }
}

export default withStyles(styles)(Home);
