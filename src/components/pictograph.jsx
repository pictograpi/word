import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import { CircularProgress } from "material-ui/Progress";
import { getWords, getImageURL } from "services/api";
import { connect } from "react-redux";

const styles = theme => ({
  loadingWrapper: {
    padding: "33.33% 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  loading: {
    width: "31% !important",
    height: "31% !important"
  },
  image: {
    padding: "50% 0",
    backgroundSize: "90%",
    backgroundPosition: "center"
  },
  text: {
    textAlign: "center"
  }
});

const mapStateToProps = (state, ownProps) => {
  return { selectedLanguageCode: state.language.selectedLanguageCode };
};

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    getWords(this.props.word, this.props.selectedLanguageCode)
      .then(words => {
        const selectedWord = words[0];

        if (!selectedWord) {
          throw new Error();
        }

        return getImageURL(selectedWord.imageId);
      })
      .then(url => {
        this.setState({ imageUrl: url });
      })
      .catch(() => this.setState({ imageFailure: true }));
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={6} sm={4} md={2}>
        <Card>
          {this.state.imageUrl || this.state.imageFailure ? (
            <CardMedia
              className={classes.image}
              image={this.state.imageUrl}
              title={this.props.word}
            />
          ) : (
            <div className={classes.loadingWrapper}>
              <CircularProgress className={classes.loading} />
            </div>
          )}
          <CardContent>
            <Typography component="h2" noWrap={true} className={classes.text}>
              {this.props.word}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(connect(mapStateToProps)(Editor));
