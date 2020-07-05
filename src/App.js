import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header-component.jsx";
import Home from "./page-components/homePage/homepage-component";
import Hats from "./page-components/hatsPage/hats.component";
import Shop from "./page-components/shopPage/shop.component";
import Contact from "./page-components/contact/contact-component";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/shop/hats" component={Hats} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
