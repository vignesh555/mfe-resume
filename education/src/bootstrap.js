import React from "react";
import ReactDom from "react-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { theme } from "common/CommonIndex";

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
  const el = document.getElementById("dev-education");
  if (el) {
    mountLocal(el);
  }
}

export { mount };