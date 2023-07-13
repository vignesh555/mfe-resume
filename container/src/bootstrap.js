import React from "react";
import ReactDom from "react-dom";

import {
    ThemeWrapper
  } from "common/CommonIndex";

import App from "./App";


ReactDom.render(<ThemeWrapper><App /></ThemeWrapper>, document.getElementById("root"))