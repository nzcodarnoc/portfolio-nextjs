import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "./Drawer";

export default function ButtonAppBar({ forwardedRefs, label }) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Drawer forwardedRefs={forwardedRefs} />
        <Typography variant="h6">{label}</Typography>
      </Toolbar>
    </AppBar>
  );
}
