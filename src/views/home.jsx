import React, { Component } from "react";
import Editor from "components/editor";
import Preview from "components/preview";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return { isPreviewActive: state.preview.active };
};

class Home extends Component {
  render() {
    return this.props.isPreviewActive ? <Preview /> : <Editor />;
  }
}

export default connect(mapStateToProps)(Home);
