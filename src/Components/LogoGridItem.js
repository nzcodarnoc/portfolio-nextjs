import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const colsXs = 6;
const colsSm = 4;
const colsMd = 3;
const colsLg = 3;

export default ({ children }) => {
  return (
    <Grid item xs={colsXs} sm={colsSm} md={colsMd} lg={colsLg}>
      <Box textAlign="center" mb={-2}>
        {children}
      </Box>
    </Grid>
  );
};
