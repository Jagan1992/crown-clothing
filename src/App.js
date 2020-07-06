import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header-component.jsx";
import Home from "./page-components/homePage/homepage-component";
import Hats from "./page-components/hatsPage/hats.component";
import Shop from "./page-components/shopPage/shop.component";
import Contact from "./page-components/contact/contact-component";
import SignInSignOut from "./page-components/sign-in-sign-out/sign-in-sign-out-component";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/hats" component={Hats} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/SignIn" component={SignInSignOut} />
      </Switch>
    </div>
  );
}

export default App;
