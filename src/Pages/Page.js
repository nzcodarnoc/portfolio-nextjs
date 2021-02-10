import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const Page = ({ children, forwardedRef }) => {
  return (
    <Box p={2} position="relative">
      <Box ref={forwardedRef} position="absolute" top={-60}></Box>
      <Paper elevation={3}>
        <Box p={2}>{children}</Box>
      </Paper>
    </Box>
  );
};

export default Page;
