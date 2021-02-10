import React from "react";
import { Picture } from "react-responsive-picture";
import Fade from "react-reveal/Fade";
import { Textfit } from "react-textfit";
import Box from "@material-ui/core/Box";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Page from "./Page";

const useStyles = makeStyles(theme => ({
  pictureFrame: {
    width: "40%",
    [theme.breakpoints.up("lg")]: {
      maxWidth: 400
    }
  },
  picture: {
    width: "100%"
  }
}));

export default ({ forwardedRef, ...rest }) => {
  const theme = useTheme();
  const classes = useStyles(rest);
  return (
    <Page forwardedRef={forwardedRef}>
      <Fade>
        <Box display="flex" justifyContent="center">
          <Box mb={2} mt={3} className={classes.pictureFrame}>
            <Picture
              className={classes.picture}
              sources={[
                {
                  srcSet: "/conrad.png, /conrad@2x.png 2x, /conrad@3x.png 3x"
                }
              ]}
            />
          </Box>
        </Box>
        <Box textAlign="center">
          <Box style={{ fontFamily: theme.typography.h1.fontFamily }}>
            <Textfit mode="single">Conrad Johnston </Textfit>
          </Box>
          <Box style={{ fontFamily: theme.typography.body1.fontFamily }}>
            <Textfit mode="single">Remote Front End Engineer</Textfit>
          </Box>
          <Box style={{ fontFamily: theme.typography.body1.fontFamily }} mt={2}>
            <Textfit mode="multi">React &middot; ReactNative &middot; JS &middot; iOS &middot; HTML5 <br /> CSS3 &middot; Ember &middot; Testing &middot; Devops</Textfit>
          </Box>
        </Box>
      </Fade>
    </Page>
  );
};
