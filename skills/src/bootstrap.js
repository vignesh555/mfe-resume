import React from "react";
import ReactDom from "react-dom";
import { theme, Box, CssBaseline, Paper, makeStyles, ThemeProvider, Grid } from "common/CommonIndex";

import App from "./App";
import HomeSkills from "./HomeSkills";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  centerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paperWidth: {
    marginTop: theme.spacing(5),
  },
}));

const LocalWrapper = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box marginTop={1}>
        <Grid container>
          <Grid item md={2}></Grid>
          <Grid item md={8}>
            <HomeSkills />
            <Box marginTop={2}>
              <App />
            </Box>
          </Grid>
          <Grid item md={2}></Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

const ThemeWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

const HomeSkillsWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomeSkills />
    </ThemeProvider>
  );
};

const mountLocal = (el) => {
  ReactDom.render(<LocalWrapper />, el);
};

const mount = (el) => {
  ReactDom.render(<ThemeWrapper />, el);
};

if (NODE_ENV === "development") {
  const el = document.getElementById("dev-skills");
  if (el) {
    mountLocal(el);
  }
}

export { mount, ThemeWrapper, HomeSkillsWrapper };
