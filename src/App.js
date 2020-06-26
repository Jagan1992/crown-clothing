import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./page-components/homepage/homepage-component";
import Hats from "./page-components/hatsPage/hats.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
