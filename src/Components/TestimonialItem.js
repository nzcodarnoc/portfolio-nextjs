import React from "react";
import Box from "@material-ui/core/Box";
import Quotes66 from "../assets/quotes-66.svg";
import Quotes99 from "../assets/quotes-99.svg";
import FaceIcon from "@material-ui/icons/Face";
import Typography from "@material-ui/core/Typography";
import ResponsiveWidth from "./ResponsiveWidth";

export default ({ name, position, children }) => {
  return (
    <Box mb={2}>
      <ResponsiveWidth>
        <Typography>
          <span style={{ position: "relative", top: "-5px" }}>
            <Quotes66 />
          </span>
          &nbsp; {children} &nbsp;
          <Quotes99 />
        </Typography>
      </ResponsiveWidth>
      <Box display="flex" mt={2} justifyContent="flex-end">
        <Box pr={1}>
          <FaceIcon color="primary" />
        </Box>
        <Box>
          <Typography>
            <strong>{name}</strong>
            <br />
            {position}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
