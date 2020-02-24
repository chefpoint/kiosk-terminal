import React from "react";
import "./App.css";
import "./styles/elements.css";

import { Switch, Route, Redirect } from "react-router";

import StoreSelector from "./components/storeSelector/StoreSelector";
import Home from "./components/home/Home";

function App() {
  return (
    <Switch>
      {/* IN STORE FEEDBACK */}
      <Route path="/:location" component={Home} />
      <Route path="/" component={StoreSelector} />

      {/* LOGIN */}
      {/* <Route path="/login" component={Login} /> */}

      {/* COMMON */}
      {/* <Route path="/not-found" component={NotFound} /> */}
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
