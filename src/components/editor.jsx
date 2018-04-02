import React, { Component } from "react";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import { setTitle } from "reducers/article";

const mapStateToProps = state => {
  return { title: state.article.title };
};

const mapDispatchToProps = dispatch => {
  return {
    handleTitleChange: event => {
      dispatch(setTitle(event.target.value));
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

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
