import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(28)
    },
  }
}));

const ResponsiveWidth = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.root}>{children}</Box>;
};

export default ResponsiveWidth;
