import React from "react";
import ReactDom from "react-dom";
import ThemeWrapper, { theme } from "./ThemeWrapper";
import {
  Avatar,
  Box,
  Grid,
  Paper,
  Typography,
  CssBaseline,
  Container,
  makeStyles,
  ThemeProvider,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Chip,
} from "./components";

const mount = (el) => {
  ReactDom.render(
    <ThemeWrapper>
      <Typography variant="h4">I am Vignesh Srinivasan,</Typography>
    </ThemeWrapper>,
    el
  );
};

if (NODE_ENV === "development") {
  const el = document.getElementById("dev-common");
  if (el) {
    mount(el);
  }
}

export {
  theme,
  Avatar,
  Box,
  Grid,
  Paper,
  Typography,
  CssBaseline,
  Container,
  makeStyles,
  ThemeProvider,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Chip,
};
