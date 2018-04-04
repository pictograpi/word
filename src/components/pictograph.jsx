import React, { Component } from "react";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import { getWords } from "services/api";
import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
  return { selectedLanguageCode: state.language.selectedLanguageCode };
}

class Editor extends Component {
  componentWillMount() {
    getWords(this.props.word, this.props.selectedLanguageCode).then(words => {
      // TODO: Add words to pictographs.
    });
  }

  render() {
    return (
      <Grid item xs={6} sm={4} md={2}>
        <Card>
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="h2" noWrap={true}>
              {this.props.word}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(Editor);
