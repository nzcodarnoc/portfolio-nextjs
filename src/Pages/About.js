import React from "react";
import Page from "./Page";
import Fade from "react-reveal/Fade";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ResponsiveWidth from "../Components/ResponsiveWidth";

const About = ({ forwardedRef }) => {
  return (
    <Page forwardedRef={forwardedRef}>
      <ResponsiveWidth>
        <Box mb={3}>
          <Fade>
            <Typography variant="h3">Experienced</Typography>
          </Fade>
          <Fade>
            <Typography>
              Two decades of experience leading to large scale development in
              some of the biggest and most trusted organizations in New Zealand.
            </Typography>
            <Typography>
              Conrad brings a wealth of UI development experience in web,
              mobile, chat, and AI, with excellent technical and creative
              skills.
            </Typography>
          </Fade>
        </Box>
        <Box mb={3}>
          <Fade>
            <Typography variant="h3">Enterprise Focus</Typography>
          </Fade>
          <Fade>
            <Typography>
              Conrad understands the unique landscape of technology projects at
              an enterprise scale, from end users, to internal stakeholders.
            </Typography>
            <Typography>
              T-Shaped, Conrad is an expert in UI/UX development, but with a
              breadth of complementary experience.
            </Typography>
          </Fade>
        </Box>
        <Box mb={3}>
          <Fade>
            <Typography variant="h3">T-shaped Skill-set</Typography>
          </Fade>
          <Fade>
            <Typography>
              With a proven track record delivering web and mobile projects,
              comes from a broad range of skills:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="React, React Native, Ember, node, Swift, Objective-C" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Technical skills including test automation, security and devops" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Creative skills in graphic design, writing and mentoring" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Excellent team skills" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Capable stakeholder management" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Strong accountability and transparency" />
              </ListItem>
            </List>
            <Typography>
              A veteran of successful digital transformation projects, Conrad is
              poised to help your organization develop it's UI and agile
              technology capabilities, in a no-nonsense, high-quality, low-risk
              way.
            </Typography>
          </Fade>
        </Box>
      </ResponsiveWidth>
    </Page>
  );
};

export default About;
