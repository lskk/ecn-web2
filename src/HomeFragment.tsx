import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Grid,
    Typography,
    withStyles,
    Theme
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import PublicIcon from "@material-ui/icons/Public";
  import OpacityIcon from "@material-ui/icons/Opacity";
  import React from "react";
  import { withRouter } from "react-router";
  import "typeface-roboto";
  import "./App.css";
  import { utcToZonedTime, format } from "date-fns-tz";
  
  // Membaca konfigurasi Travel API URL
  import appConfig from "./appConfig.json";
  
  const styles = (theme: Theme) => ({
    mainFeaturedPost: {
      position: "relative",
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      flex: "1 1 100%"
      // height: "80%",
    }
  });
  
  class HomeFragment extends React.Component {
    constructor(props: any) {
      super(props);
      this.state = {
        cityId: 1,
        city: {},
        backgroundImageUrl: undefined,
      };
    }
  
    componentDidMount() {
      this.fetchCity();
    }
  
    async fetchCity() {
      /* this.setState({
        city: {
          "id": 1,
          "name": "Rome",
          "shortDesc": "is a historical powerhouse",
          "timeZone": "Europe/Rome",
          "fileName": "rome.jpg",
          "temperatureCelsius": -2.0,
          "weather": "Scattered clouds",
          "country": {
            "id": "IT",
            "name": "Italy"
          },
          "_links": {
            "self": {
              "href": "http://localhost:8080/cities/1"
            },
            "city": {
              "href": "http://localhost:8080/cities/1{?projection}",
              "templated": true
            },
            "country": {
              "href": "http://localhost:8080/cities/1/country"
            }
          }
        },
        backgroundImageUrl: "https://placeimg.com/640/480/arch?t=11",
      }); */
  
      // Mengambil nilai cityId
    //   const { cityId } = this.state;
    //   // Menyiapkan URL untuk API "Get city with related"
    //   const cityUrl =
    //     `${appConfig.travelApiUrl}/cities/${cityId}?projection=cityRelated`;
    //   // Tampilkan log di web browser Console
    //   console.info("Fetching", cityUrl, "...");
    //   try {
    //     // Send GET request ke Travel API Service
    //     const resp = await fetch(cityUrl, {method: "GET"});
    //     // Parse data dari format JSON menjadi JavaScript object
    //     const city = await resp.json();
    //     // Mengupdate state component React berdasarkan data tsb. (otomatis mengupdate UI)
    //     this.setState({
    //       city: city,
    //       backgroundImageUrl: "https://placeimg.com/640/480/arch?t=11",
    //     });
    //   } catch (e) {
    //     console.error("Error:", e);
    //   }
    }
  
    render() {
      const { classes, match, location, history } = this.props as any;
      const { city } = this.state as any;
      const cityTime = format(utcToZonedTime(new Date(), "Europe/Rome"), "hh:mm aa");
      const cityDate = format(utcToZonedTime(new Date(), "Europe/Rome"), "MMM d, yyyy");
      return (
        <Box
          style={{display: "flex", flexDirection: "column", height: "100%", width: "100%"}}>
            
          <Grid container direction="column" justify="space-around" alignItems="center"
            style={{height: "100%", 
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) )`}}
            className={classes.mainFeaturedPost}>
            <Grid item style={{ flex: 2 }} />
            <Grid item>
              <Typography variant="subtitle1" style={{ textTransform: "uppercase" }}>
                {city.country && city.country.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3" style={{ textTransform: "uppercase" }}>
                {city.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" style={{ textTransform: "uppercase" }}>
                {city.shortDesc}
              </Typography>
            </Grid>
            <Grid item style={{ flex: 1 }} />
            <Grid item style={{ width: "100%" }}>
              <Grid container justify="space-between">
                <Grid item style={{ padding: "1rem" }}>
                  <Typography variant="caption" style={{ textTransform: "uppercase" }}>
                    Local time
                  </Typography>
                  <Typography variant="h5">{cityTime}</Typography>
                  <Typography variant="caption">{cityDate}</Typography>
                </Grid>
                <Grid item style={{ padding: "1rem", textAlign: "right" }}>
                  <Typography variant="caption" style={{ textTransform: "uppercase" }}>
                    Today
                  </Typography>
                  <Typography variant="h5">{city.temperatureCelsius}°C</Typography>
                  <Typography variant="caption">{city.weather}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
  
          <BottomNavigation showLabels style={{ flex: "0 1 6rem" }}
            onChange={(event, newValue) => {
              history.push(newValue);
            }} >
            <BottomNavigationAction value={`/earthquakes`}
              label="Earthquakes" icon={<PublicIcon />} />
            <BottomNavigationAction value="/tsunamis"
              label="Tsunamis" icon={<OpacityIcon />} />
          </BottomNavigation>
        </Box>
      );
    }
  }
  
  export default withRouter(withStyles(styles as any)(HomeFragment) as any);
  