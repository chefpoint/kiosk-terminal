import React from "react";
import { Switch, Route, Redirect } from "react-router";

import LocationSelector from "./sections/locationSelector/LocationSelector";
import Home from "./sections/kiosk/Home";

import "./styles/elements.css";

function App() {
  return (
    <Switch>
      <Route path="/:location" component={Home} />
      <Route path="/" component={LocationSelector} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
