import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

const Comp = () =>  {
    return (
        <h1>Objective</h1>
    )
}

const App = () => {
    return (
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Comp} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    )
}

export default App;
