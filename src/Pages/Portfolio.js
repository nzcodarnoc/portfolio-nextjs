import React from "react";
import Page from "./Page";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import YouTube from "react-youtube";
import Divider from "@material-ui/core/Divider";
import Fade from "react-reveal/Fade";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import ResponsiveWidth from "../Components/ResponsiveWidth";
import { TwitterTweetEmbed } from "react-twitter-embed";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: -theme.spacing(0.5),
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  },
  heading: {
    marginBottom: "0.25em"
  },
  subHeading: {
    marginBottom: "0.5em"
  },
  video: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: "flex",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: 200,
      marginTop: theme.spacing(2)
    }
  }
}));

export default ({ forwardedRef, ...rest }) => {
  const classes = useStyles(rest);
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestbranding: 1,
      loop: 1
    }
  };

  return (
    <Page forwardedRef={forwardedRef}>
      <Fade>
        <Typography variant="h2">Selected Portfolio</Typography>
      </Fade>
      <Fade>
        <Typography variant="h3" className={classes.heading}>
          NZ Police
        </Typography>
        <Typography variant="h4" className={classes.subHeading}>
          Frontend engineer
        </Typography>
      </Fade>
      <Fade>
        <Box mt={2}>
          <div className={classes.root}>
            <Chip label="2019&ndash;present" />
            <Chip variant="outlined" label="AI" />
            <Chip variant="outlined" label="HTML/CSS" />
            <Chip variant="outlined" label="React" />
            <Chip variant="outlined" label="React Native" />
            <Chip variant="outlined" label="Automated testing" />
            <Chip variant="outlined" label="OpenShift" />
          </div>
          <Typography>
            <ResponsiveWidth>
              Lead front end engineer for Ella: New Zealand Police's digital
              person. Who will be stationed at New Zealand Police's National
              Headquarters to talk to visitors about Police services and handle
              visitor check-in. Front end engineer. React. Google Dialog Flow.
              Soul Machines Digital Person, Intel AI, OpenShift.{" "}
            </ResponsiveWidth>
          </Typography>
          <TwitterTweetEmbed tweetId={"1227355757483413504"} />
        </Box>
        <Box mb={4} mt={4}>
          <Divider variant="middle" />
        </Box>
      </Fade>
      <Fade>
        <Typography variant="h3" className={classes.heading}>
          Co-operative Bank
        </Typography>
        <Typography variant="h4" className={classes.subHeading}>
          Frontend engineer/iOS dev
        </Typography>
      </Fade>
      <Fade>
        <Box mt={2}>
          <div className={classes.root}>
            <Chip label="2018&ndash;2019" />
            <Chip variant="outlined" label="Ember.js" />
            <Chip variant="outlined" label="HTML/CSS" />
            <Chip variant="outlined" label="Swift" />
            <Chip variant="outlined" label="Automated testing" />
            <Chip variant="outlined" label="CI/CD" />
          </div>
        </Box>
      </Fade>
      <Fade>
        <ResponsiveWidth>
          <Typography>
            Working as part of a Scrum/Agile team (four devs, one tester, one
            business analyst, one product owner) in front-end development using
            Ember.js for Co-op internet banking. And Swift for Co-op iOS app.
          </Typography>
        </ResponsiveWidth>
        <div className={classes.video}>
          <YouTube videoId="3l62XQO_mns" opts={opts} />
        </div>
        <Box mb={4} mt={4}>
          <Divider variant="middle" />
        </Box>
      </Fade>
      <Fade>
        <Typography variant="h3" className={classes.heading}>
          ANZ Bank
        </Typography>
        <Typography variant="h4" className={classes.subHeading}>
          Frontend engineer/iOS dev
        </Typography>
      </Fade>
      <Fade>
        <Box mt={2}>
          <div className={classes.root}>
            <Chip label="2014&ndash;2017" />
            <Chip variant="outlined" label="Ember.js" />
            <Chip variant="outlined" label="HTML/CSS" />
            <Chip variant="outlined" label="Swift" />
            <Chip variant="outlined" label="Objective-C" />
            <Chip variant="outlined" label="Automated testing" />
            <Chip variant="outlined" label="CI/CD" />
          </div>
          <ResponsiveWidth>
            <Typography>
              Working as part of a Scrum/Agile team (five devs, two testers, one
              business analyst, one product owner) in front-end development
              using Ember.js for ANZ internet banking. And Swift/Objective-C
              Scope for ANZ iOS app goMoney.
            </Typography>
          </ResponsiveWidth>
        </Box>
        <div className={classes.video}>
          <YouTube videoId="QIU0UP6Vprk" opts={opts} />
        </div>
        <Box mb={4} mt={4}>
          <Divider variant="middle" />
        </Box>
      </Fade>
    </Page>
  );
};
