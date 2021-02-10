/* global gtag */
import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

export default ({ icon, link, ...other }) => {
  const linkRef = useRef(null);
  const onClick = () => {
    const anchorTag = linkRef.current.getElementsByTagName('a')[0]
    gtag('event', 'screen_view', {
      screen_name: anchorTag.href,
    })
    anchorTag.click();
  };

  return (
    <Button onClick={onClick} {...other}>
      {icon}
      <Hidden xsUp implementation="css">
        <div ref={linkRef}>{link}</div>
      </Hidden>
    </Button>
  );
};
