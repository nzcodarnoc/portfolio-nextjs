import React from "react";
import Page from "./Page";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Grid from "@material-ui/core/Grid";
import LogoGridItem from "../Components/LogoGridItem";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import AnzLogo from "../assets/logo-anz.svg";
import PoliceLogo from "../assets/logo-police.svg";
import CoopLogo from "../assets/logo-coop.svg";
import BbdoLogo from "../assets/logo-bbdo.svg";
import FordLogo from "../assets/logo-ford.svg";
import GiveALittleLogo from "../assets/logo-give-a-little.svg";
import JwtLogo from "../assets/logo-jwt.svg";
import OgilvyLogo from "../assets/logo-ogilvy.svg";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(theme => ({
  root: {
    width: 80,
    [theme.breakpoints.up("sm")]: {
      width: 100
    },
    [theme.breakpoints.up("md")]: {
      width: 120
    },
    [theme.breakpoints.up("lg")]: {
      width: 140
    }
  }
}));

export default ({ forwardedRef, ...rest }) => {
  const classes = useStyles(rest);
  function onClick() {
    document.getElementById("resume").click();
  }
  return (
    <Page forwardedRef={forwardedRef}>
      <Fade>
        <Typography variant="h3">Resume</Typography>
      </Fade>
      <Fade>
        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<PictureAsPdfIcon />}
            onClick={onClick}
          >
            Download Resume
          </Button>
          <a
            href="/conrad-johnston-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            id="resume"
            style={{ display: "none" }}
          ></a>
        </Box>
        <Box pt={3} pl={3} pr={3} mb={5}>
          <Grid container justify="center" alignItems="center">
            <LogoGridItem>
              <AnzLogo className={classes.root} title="ANZ" />
            </LogoGridItem>
            <LogoGridItem>
              <BbdoLogo className={classes.root} title="ClemengerBBDO" />
            </LogoGridItem>
            <LogoGridItem>
              <FordLogo className={classes.root} title="Ford" />
            </LogoGridItem>
            <LogoGridItem>
              <GiveALittleLogo className={classes.root} title="Give a Little" />
            </LogoGridItem>
            <LogoGridItem>
              <JwtLogo className={classes.root} title="JWT" />
            </LogoGridItem>
            <LogoGridItem>
              <PoliceLogo className={classes.root} title="Police" />
            </LogoGridItem>
            <LogoGridItem>
              <OgilvyLogo className={classes.root} title="Ogilvy" />
            </LogoGridItem>
            <LogoGridItem>
              <CoopLogo className={classes.root} title="Co-operative Bank" />
            </LogoGridItem>
          </Grid>
        </Box>
      </Fade>
    </Page>
  );
};
