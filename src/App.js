import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header-component.jsx";
import Home from "./page-components/homePage/homepage-component";
import Hats from "./page-components/hatsPage/hats.component";
import Shop from "./page-components/shopPage/shop.component";
import Contact from "./page-components/contact/contact-component";
import SignInSignOut from "./page-components/sign-in-sign-out/sign-in-sign-out-component";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: "",
    };
  }

  unSubscribeAuth = null;

  componentDidMount() {
    this.unSubscribeAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
      console.log(user);
    });
  }

  //for unSubScribing from the gmail and to avoid the memory leaks.
  componentWillUnmount() {
    this.unSubscribeAuth();
  }

  render() {
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
}

export default App;
