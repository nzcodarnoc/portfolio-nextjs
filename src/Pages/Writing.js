import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Page from "./Page";
import TestimonialItem from "../Components/TestimonialItem";
import Divider from "@material-ui/core/Divider";
import Fade from "react-reveal/Fade";

const Writing = ({ forwardedRef }) => {
  return (
    <Page forwardedRef={forwardedRef}>
      <Fade>
        <Typography variant="h2">Writing</Typography>
      </Fade>
      <Fade>
<pre>
      
      This first email is a list of technical articles I wrote last year, using the pen-name "Queen Olivia".
      
      Published in "The Startup" https://medium.com/swlh
      
          How to Use a Library in Next.JS That Wants Window.Whatever
          Hosting a Next.JS App on a Non-Root Path
      
      Published in "Gitconnected" https://levelup.gitconnected.com
      
          Async load an audio file and play it with howler.js
      
      Personal medium.com articles
      
          Using Docker as a Linux emulation layer on MacOS for POSIX compliance to install a Node.js application
          Refactoring a Docker Compose Project Using Mermaid for Documentation Diagrams
      
      A popular article from 2019, also Medium.com
      
          React Native & React Native Web, one code base for iOS, Android and web
          </pre>
              <Box mb={5} mt={3}>
          <Divider variant="middle" />
        </Box>
      </Fade>
    </Page>
  );
};

export default Writing;
