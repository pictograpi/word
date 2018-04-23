import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import { CircularProgress } from "material-ui/Progress";
import Store from "reducers";
import { getPictographs } from "services/api";
import { addPictographs } from "reducers/article";
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
  "common-noun": {
    borderColor: "red !important"
  },
  adjective: {
    borderColor: "yellow !important"
  },
  verb: {
    borderColor: "blue !important"
  },
  miscellanea: {
    borderColor: "green !important"
  },
  "proper-noun": {
    borderColor: "grey !important"
  },
  social: {
    borderColor: "purple !important"
  },
  imageWithBorder: {
    border: "solid 2px transparent"
  },
  text: {
    textAlign: "center"
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    selectedLanguageCode: state.language.selectedLanguageCode,
    isBorderVisible: state.editor.borderVisible,
    isTextVisible: state.editor.textVisible,
    pictographs: state.article.pictographs[`${ownProps.index}-${ownProps.word}`]
  };
};

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    if (!this.props.pictographs) {
      getPictographs(this.props.word, this.props.selectedLanguageCode).then(pictographs => {
        // Set selected
        if (pictographs.length >= 0) {
          pictographs[0].selected = true;
        }

        Store.dispatch(addPictographs(`${this.props.index}-${this.props.word}`, pictographs));
      });
    }
  }

  render() {
    const { classes } = this.props;
    // Choose selected pictograph
    const pictograph = this.props.pictographs && this.props.pictographs.filter(({ selected }) => selected)[0];
    const imageClasses = [
      this.props.isBorderVisible && classes.imageWithBorder,
      pictograph && classes[pictograph.typeCode]
    ].join(" ");
    // Image DOM loading
    let imageDom = (
      <div className={classes.loadingWrapper}>
        <CircularProgress className={classes.loading} />
      </div>
    );

    if (typeof this.props.pictographs === "object" && this.props.pictographs.length === 0) {
      // No image
      imageDom = <CardMedia className={classes.image} image="" title={this.props.word} />;
    } else if (pictograph) {
      // Image loaded
      imageDom = <CardMedia className={classes.image} image={pictograph.images[0]} title={this.props.word} />;
    }

    return (
      <Grid item xs={6} sm={4} md={2}>
        <Card className={imageClasses}>
          {imageDom}
          {this.props.isTextVisible && (
            <CardContent>
              <Typography component="h2" noWrap={true} className={classes.text}>
                {this.props.word}
              </Typography>
            </CardContent>
          )}
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(connect(mapStateToProps)(Editor));
