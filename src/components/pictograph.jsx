import React, { Component } from "react";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

export default class Editor extends Component {
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
              Pictograph
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}
