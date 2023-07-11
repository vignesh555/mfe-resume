import './styles.css';
import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";


console.log(DOMAIN_URL)

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

export const theme = createTheme({
  typography: {
    fontFamily: 'CustomFont-Regular'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': {
          fontFamily: 'CustomFont-Regular',
          src: `url('${DOMAIN_URL}/static/fonts/Kalam/Kalam-Regular.ttf') format('truetype')`,
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontDisplay: 'swap',
        },
      },
    },
  },
});

const ThemeWrapper = (props) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Paper elevation={3} className={classes.paperWidth}>
          <Box className={classes.box}>{props.children}</Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
