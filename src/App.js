import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./reducer/user-reducer/user-actions";
import Header from "./components/header/header-component.jsx";
import Home from "./page-components/homePage/homepage-component";
import Hats from "./page-components/hatsPage/hats.component";
import Shop from "./page-components/shopPage/shop.component";
import Contact from "./page-components/contact/contact-component";
import SignInSignOut from "./page-components/sign-in-sign-out/sign-in-sign-out-component";
import { createUserProfileDocument, auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends React.Component {
  unSubscribeAuth = null;

  componentDidMount() {
    this.unSubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            displayName: snapShot.data().displayName,
            emailId: snapShot.data().email,
            createDate: snapShot.data().createdDate,
          });
        });

        this.props.setCurrentUser(userAuth);
      }
      this.props.setCurrentUser(null);
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
          <Route
            exact
            path="/SignIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignOut />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
