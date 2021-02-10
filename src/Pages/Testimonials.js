import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Page from "./Page";
import TestimonialItem from "../Components/TestimonialItem";
import Divider from "@material-ui/core/Divider";
import Fade from "react-reveal/Fade";

export default ({ forwardedRef }) => {
  return (
    <Page forwardedRef={forwardedRef}>
      <Fade>
        <Typography variant="h2">Testimonials</Typography>
      </Fade>
      <Fade>
        <TestimonialItem name="Pim Engels" position="Agile Coach">
          Delivering New Zealand Police's first digital human "Ella", Conrad
          shows a visual language that is elegant and refined, his technology
          craft is superb, as a result, users are naturally at ease when
          interacting with "Ella".
          <br />
          Conrad is able to create an emotionally friction less flow in this
          information rich digital channel, a feat rarely achieved. He makes
          things look easy, a sign of true craftsmanship celebrated by
          colleagues and users of all backgrounds.
        </TestimonialItem>
        <Box mb={5} mt={3}>
          <Divider variant="middle" />
        </Box>
      </Fade>

      <Fade>
        <TestimonialItem name="Sean G Muller" position="Enterprise Architect">
          Conrad and I worked on a very challenging and very rewarding program
          of work within NZ Police. I would consider Conrad an exceptional
          developer who both understands technically how to develop applications
          but also understands customer outcomes that the application he
          develops can deliver. I would consider Conrad a senior developer that
          provides excellent guidance and training to junior developers. I would
          consider bringing Conrad on to any develop project I was working on
          and if Conrad was working on a project and recommended it to me I
          would take it.
        </TestimonialItem>
        <Box mb={5} mt={3}>
          <Divider variant="middle" />
        </Box>
      </Fade>
      <Fade>
        <TestimonialItem
          name="Kerry Martin"
          position="Senior Programmatic Manager"
        >
          I have worked with Conrad on multiple occasions on a variety of web
          and email projects, and he has always been quick to respond, providing
          excellent value for money, and his products are always of impeccable
          quality and innovative. Conrad is an absolute delight to work with and
          I would never hesitate to recommend him to those seeking a seamless
          web service provider.
        </TestimonialItem>
        <Box mb={5} mt={3}>
          <Divider variant="middle" />
        </Box>
      </Fade>
      <Fade>
        <TestimonialItem name="Jordan Walsh" position="Product Owner">
          Conrad was an extremely knowledgeable manager and mentor during my
          time at Comtron. As a student, he was able to introduce me to the
          finer points of Web Development, Frameworks and Content Management
          with my very limited skill-set, to the point where I was creating and
          maintaining sites of high quality. Conrad is very friendly,
          approachable and easy to work alongside. He will work to ensure the
          success of any project that he is on.
        </TestimonialItem>
      </Fade>
    </Page>
  );
};
