import {
  AppBar,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
  withStyles,
  Theme,
  Card,
  CardContent,
  CircularProgress
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MapIcon from "@material-ui/icons/Map";
import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import appConfig from "./appConfig.json";

const styles = (theme: Theme) => ({
  attractionCategoryItem: {
    // textAlign: "center",
    display: "flex"
  },
  quakeCard: {
    flex: 1,
    // backgroundColor: theme.palette.grey[800],
    // color: theme.palette.common.white,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    // display: "flex",
    // flexDirection: "column",
    // padding: "1rem",
    // height: "12rem",
    textDecoration: "none",
  }
});

class EarthquakeListScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      attractionCategory: undefined,
      earthquakes: [],
      loading: false
    };
  }

  componentDidMount() {
    this.fetchAttractionCategory();
    this.fetchQuakes();
  }

  async fetchAttractionCategory() {
    /* this.setState({
      attractionCategory: {
        name: "Must see"
      },
    }); */
    /* const { cityId, attractionCategoryId } = this.props.match.params;
    const attractionCategoryUrl = `${
      appConfig.travelApiUrl
    }/attractionCategories/${attractionCategoryId}`;
    console.info("Fetching", attractionCategoryUrl, "...");
    const resp = await fetch(attractionCategoryUrl, { method: "GET" });
    const json = await resp.json();
    this.setState({
      attractionCategory: json
    }); */
  }

  async fetchQuakes() {
    /* this.setState({
      attractions: [
        {
          id: 1,
          name: "The Collosseum",
          subtitle: "One of the most recognizable sites in the world",
          fileName: "101",
          favorited: false
        },
        {
          id: 2,
          name: "The Trevi Fountain",
          subtitle: "It was designed by architect Nicola Salvi in the 18th",
          fileName: "102",
          favorited: true
        },
        {
          id: 3,
          name: "Castel Sant'Angelo",
          subtitle: "Erected on the banks of the Tiber River",
          fileName: "103",
          favorited: false
        }
      ]
    }); */
    this.setState({loading: true});
    try {
      const quakesUrl = `${appConfig.qzApiUrl}/earthquakes`;
      console.info("Fetching", quakesUrl, "...");
      const resp = await fetch(quakesUrl, { method: "GET" });
      const json = await resp.json();
      this.setState({
        earthquakes: json._embedded.earthquakes
      });     
    } finally {
      this.setState({loading: false});
    }
    /* const { cityId, attractionCategoryId } = this.props.match.params;
*/
  }

  render() {
    const { classes, match, location, history } = this.props as any;
    const { earthquakes } = this.state as any;
    const { cityId, attractionCategoryId } = match.params;
    return (
      <div style={{ display: "flex", flex: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="back"
              onClick={e => history.goBack()}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Earthquakes
            </Typography>
            {/* <IconButton edge="end" color="inherit" aria-label="map">
              <MapIcon />
            </IconButton> */}
          </Toolbar>
        </AppBar>
        <Grid
          container
          style={{
            margin: "4.5rem 0.5rem 0.5rem 0.5rem",
            alignContent: "baseline",
            justifyContent: "center"
          }}
          spacing={1}
        >
          {this.state.loading && <CircularProgress />}
          {earthquakes.map((quake: any) => (
            <Grid
              item
              key={quake.id}
              xs={12}
              md={6}
              className={classes.attractionCategoryItem}
            >
              {/* 
              // @ts-ignore */}
              <Card
                component={Link as any}
                to={`/cities/${cityId}/attractions/${quake.id}`}
                className={classes.quakeCard}
                style={{
                  
                }}
              >
                <CardContent>
                  <Typography variant="body1" style={{ textAlign: "left" }}>
                    {quake.name}
                  </Typography>
                  <Typography variant="caption" style={{ textAlign: "left" }}>
                    {quake.originTime}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles as any)(EarthquakeListScreen) as any);
