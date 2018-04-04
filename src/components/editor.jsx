import React, { Component } from "react";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import { setTitle, setText } from "reducers/article";

const mapStateToProps = state => {
  return { title: state.article.title, text: state.article.text };
};

const mapDispatchToProps = dispatch => {
  return {
    handleTitleChange: event => {
      dispatch(setTitle(event.target.value));
    },
    handleTextChange: event => {
      dispatch(setText(event.target.value));
    }
  };
};

class Editor extends Component {
  render() {
    return (
      <Grid container alignItems="center" justify="center" spacing={24}>
        <Grid item xs={11} sm={9} margin="normal">
          <TextField
            id="name"
            label="Title"
            margin="normal"
            value={this.props.title}
            onChange={this.props.handleTitleChange.bind(this)}
          />
          <TextField
            id="multiline-flexible"
            label="Start writing here"
            value={this.props.text}
            onChange={this.props.handleTextChange.bind(this)}
            multiline
            fullWidth
            rowsMax="10"
            margin="normal"
          />
        </Grid>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
