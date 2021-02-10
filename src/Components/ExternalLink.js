import React from "react";
import Link from "@material-ui/core/Link"


export default ({ href, children }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
};
