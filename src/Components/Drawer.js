import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import FaceIcon from "@material-ui/icons/Face";
import DescriptionIcon from "@material-ui/icons/Description";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import TableChartIcon from "@material-ui/icons/TableChart";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import PhoneIcon from "@material-ui/icons/PhoneIphone";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

export default ({ forwardedRefs }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    open: false
  });

  const menuItemClick = ref => {
    ref.current.scrollIntoView();
  };

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, open });
  };

  const menu = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <CloseIcon />
          </ListItemIcon>
          <ListItemText primary="close" />
        </ListItem>
      </List>

      <Divider />
      <List>
        {[
          { label: "Home", icon: HomeIcon, ref: forwardedRefs.homeRef },
          { label: "About", icon: InfoIcon, ref: forwardedRefs.aboutRef },
          {
            label: "Portfolio",
            icon: TableChartIcon,
            ref: forwardedRefs.portfolioRef
          },
          { label: "Resume", icon: PictureAsPdfIcon, ref: forwardedRefs.resumeRef },
          {
            label: "Testimonials",
            icon: FaceIcon,
            ref: forwardedRefs.testimonialsRef
          },
          {
            label: "Writing",
            icon: DescriptionIcon,
            ref: forwardedRefs.writingRef
          },
          { label: "Contact", icon: PhoneIcon, ref: forwardedRefs.contactRef }
        ].map((menuItem, index) => (
          <ListItem
            button
            key={index}
            onClick={() => menuItemClick(menuItem.ref)}
          >
            <ListItemIcon><menuItem.icon /></ListItemIcon>
            <ListItemText primary={menuItem.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={state.open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {menu()}
      </SwipeableDrawer>
    </>
  );
};
