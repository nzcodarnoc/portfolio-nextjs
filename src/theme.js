import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// Generated here:
// https://react-theming.github.io/create-mui-theme/
// https://material.io/resources/color/#!/?view.left=1&view.right=0&primary.color=455A64&secondary.color=424242

const palette = {
  primary: { main: "#455A64" },
  secondary: { main: "#424242" }
};

const typography = {
  fontFamily: "'Lato', sans-serif",
  h1: {
    fontFamily: "'Oswald', sans-serif",
    lineHeight: 1,
    marginBottom: 20,
  },
  h2: {
    fontFamily: "'Oswald', sans-serif",
    marginBottom: 20,
  },
  h3: {
    fontFamily: "'Oswald', sans-serif",
    marginBottom: 20,
  },
  h4: {
    fontFamily: "'Oswald', sans-serif",
  },
  subtitle1: {
    fontSize: 2,
    lineHeight: 1.1,
    marginBottom: 20,
  },
  subtitle2: {
    fontSize: 2,
    lineHeight: 1.1,
    marginBottom: 20,
  }
};

const theme = createMuiTheme({ palette, typography });

export default responsiveFontSizes(theme);
