import React from "react";
import ReactDom from "react-dom";
import { theme, Box, CssBaseline, Paper, makeStyles, ThemeProvider, Container } from "common/CommonIndex";

import App from "./App";

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
      <Container maxWidth="lg">
        <Paper elevation={3} className={classes.paperWidth}>
          <Box className={classes.box}>
            <App />
          </Box>
        </Paper>
      </Container>
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

export { mount };
