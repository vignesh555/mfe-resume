import React from "react";
import ReactDom from "react-dom";
import { StylesProvider } from "@material-ui/core/styles";
import App from "./App";

const mount = (el) => {
    ReactDom.render(<App />, el)
}

console.log(NODE_ENV)
if (NODE_ENV === 'development') {
    const el = document.getElementById("dev-education");
    if (el) {
        mount(el);
    }
}

export { mount };