import React from "react";
import Obfuscate from "react-obfuscate";
import ExternalLink from "../Components/ExternalLink";
import Page from "./Page";
import Typography from "@material-ui/core/Typography";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/PhoneIphone";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import ContactButton from "../Components/ContactButton";
import Fade from "react-reveal/Fade";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
  },
  container: {
    marginLeft: -10,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
    },
  }
}));

const Contact = ({ forwardedRef }) => {
  const classes = useStyles()
  const date = new Date();

  const linkText = () =>
    `http://www.example.com/${date.getTime() / Math.random()}`;

  return (
    <Page forwardedRef={forwardedRef}>
      <Fade>
        <Typography variant="h3">Contact</Typography>
      </Fade>
      <Fade>
        <Box mb={3} className={classes.container}>
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
          >
            <ContactButton
              icon={<MailOutlineIcon />}
              link={
                <Obfuscate
                  email="conradrjohnston@icloud.com"
                  linkText={linkText()}
                />
              }
            />
            <ContactButton
              icon={
                <>
                  <PhoneIcon /> NZ
                </>
              }
              link={<Obfuscate tel="+64 27 655 9009" linkText={linkText()} />}
            />
            <ContactButton
              icon={
                <>
                  <PhoneIcon /> USA
                </>
              }
              link={<Obfuscate tel="(310) 846-8633" linkText={linkText()} />}
            />
            <ContactButton
              icon={<TwitterIcon />}
              link={
                <ExternalLink href="https://twitter.com/conradrjohnston">
                  @conradrjohnston
                </ExternalLink>
              }
            />
            <ContactButton
              icon={<LinkedInIcon />}
              link={
                <ExternalLink href="https://www.linkedin.com/in/conradrjohnston">
                  LinkedIn
                </ExternalLink>
              }
            />
            >
            <ContactButton
              icon={<GitHubIcon />}
              link={
                <ExternalLink href="https://github.com/nzcodarnoc">
                  GitHub
                </ExternalLink>
              }
            />
            <ContactButton
              icon={<InstagramIcon />}
              link={
                <ExternalLink href="https://www.instagram.com/conradrjohnston/">
                  LinkedIn
                </ExternalLink>
              }
            />
          </ButtonGroup>
        </Box>
        <Box className={classes.root} mt={4} mb={3}>
          <Typography>
            <ExternalLink href="https://www.timeanddate.com/time/zone/new-zealand">
              Pacific/Auckland ~UTC+12
            </ExternalLink>
          </Typography>
        </Box>
      </Fade>
    </Page>
  );
};

export default Contact;
