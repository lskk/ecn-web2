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
  CircularProgress,
  Input,
  TextField,
  Button
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

class TsunamiPotentialScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      attractionCategory: undefined,
      earthquakes: [],
      loading: false,
      t0: 5.1, 
      td: 5.1,
      mw: 8.4,
      prediction: {},
    };
  }

  componentDidMount() {
    // this.fetchAttractionCategory();
    // this.fetchQuakes();
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

  async predict() {
    const req = {
      t0: parseFloat(this.state.t0), 
      td: parseFloat(this.state.td), 
      mw: parseFloat(this.state.mw)
    };
    console.info("Request:", req);
    const predictUrl = `${appConfig.qzApiUrl}/tsunamiPotential/predict`;
    const resp = await fetch(predictUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });
    const json = await resp.json();
    console.info("Prediction:", json);
    this.setState({prediction: json});
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
              Tsunami Potential
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
            justifyContent: "left"
          }}
          spacing={1}
        >
          <form>
          <TextField value={this.state.t0} label="t0"
            onChange={e => this.setState({t0: e.target.value})} />
          <TextField value={this.state.td} label="td"
            onChange={e => this.setState({td: e.target.value})} />
          <TextField value={this.state.mw} label="mw"
            onChange={e => this.setState({mw: e.target.value})} />
          <div>
            <Button variant="contained" onClick={() => this.predict()}>Predict</Button>
          </div>
          </form>
          <Typography style={{display: "block"}}>No tsunami? {this.state.prediction.tsunamiNo}</Typography>
          <Typography style={{display: "block"}}>Tsunami will happen? {this.state.prediction.tsunamiYes}</Typography>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles as any)(TsunamiPotentialScreen) as any);
