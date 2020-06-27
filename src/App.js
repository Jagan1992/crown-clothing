import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./page-components/homePage/homepage-component";
import Hats from "./page-components/hatsPage/hats.component";
import Shop from "./page-components/shopPage/shop.component";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Shop" component={Shop} />
        <Route path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
