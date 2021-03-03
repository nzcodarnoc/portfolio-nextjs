import React, { createRef, useEffect, useState } from "react";
import Portfolio from "../src/Pages/Portfolio";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Resume from "../src/Pages/Resume";
import Writing from "../src/Pages/Writing";
import Contact from "../src/Pages/Contact";
import AppBar from "../src/Components/AppBar";
import { ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import theme from "../src/theme";
import Testimonials from "../src/Pages/Testimonials";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },  
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(18),
      paddingRight: theme.spacing(18),
    }
  }
}));

function App() {
  const classes = useStyles();
  const [forwardedRefs, _setForwardRefs] = useState({
    homeRef: createRef(),
    aboutRef: createRef(),
    portfolioRef: createRef(),
    resumeRef: createRef(),
    testimonialsRef: createRef(),
    writingRef: createRef(),
    contactRef: createRef()
  });
  const pageTitles = {
    homeRef: <>Introducing Conrad Johnston</>,
    aboutRef: <>About Conrad</>,
    portfolioRef: <>Selected Portfolio</>,
    resumeRef: <>Download Conrad&rsquo;s C.V.</>,
    testimonialsRef: <>Testimonials</>,
    writingRef: <>Writing</>,
    contactRef: <>Contact</>
  };
  function didScroll() {
    let prevRef;
    for (const refName in forwardedRefs) {
      if (prevRef === undefined) prevRef = refName;
      if (!forwardedRefs.hasOwnProperty(refName)) continue;
      if (forwardedRefs[refName].current === null) continue;
      let top = forwardedRefs[refName].current.getBoundingClientRect().top;
      let height = forwardedRefs[refName].current.getBoundingClientRect()
        .height;
      if (top + height - 10 > 0) {
        setPageTitle(pageTitles[prevRef]);
        return;
      }
      prevRef = refName;
    }
  }

  const [pageTitle, setPageTitle] = useState(pageTitles.homeRef);

  useEffect(() => {
    window.addEventListener("scroll", didScroll);
    return () => {
      window.removeEventListener("scroll", didScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header>
          <AppBar forwardedRefs={forwardedRefs} label={pageTitle} />
        </header>
        <Box pt={8} pb={25} className={classes.root}>
          <Home forwardedRef={forwardedRefs.homeRef} />
          <About forwardedRef={forwardedRefs.aboutRef} />
          <Portfolio forwardedRef={forwardedRefs.portfolioRef} />
          <Resume forwardedRef={forwardedRefs.resumeRef} />
          <Testimonials forwardedRef={forwardedRefs.testimonialsRef} />
          <Writing forwardedRef={forwardedRefs.writingRef} />
          <Contact forwardedRef={forwardedRefs.contactRef} />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
