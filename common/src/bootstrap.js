import React from "react";
import ReactDom from "react-dom";
import Typography from '@material-ui/core/Typography';
import ThemeWrapper, { theme } from "./ThemeWrapper";

const mount = (el) => {
  ReactDom.render(<ThemeWrapper><Typography variant="h4">
  I am Vignesh Srinivasan,
</Typography></ThemeWrapper>, el);
};

if (NODE_ENV === "development") {
  const el = document.getElementById("dev-common");
  if (el) {
    mount(el);
  }
}

export { theme };
