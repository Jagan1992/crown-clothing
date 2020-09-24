import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./reducer/user-reducer/user-actions";
import Header from "./components/header/header-component";
import Home from "./page-components/home/home-component";
import Shop from "./page-components/shop/shop.component";
import Contact from "./page-components/contact/contact-component";
import SignInSignOut from "./page-components/sign-in-sign-out/sign-in-sign-out-component";
import CheckOut from "./components/checkout/checkout.component";
import { createUserProfileDocument, auth } from "./firebase/firebase.utils";
import { userSelector } from "./reducer/user-reducer/user.selector";
import { ClearCart } from "./reducer/cart-reducer/cart-actions";
//we can configure all the selectors here.
import { createStructuredSelector } from "reselect";
import "./App.css";

const App = ({ setCurrentUser, currentUser, ClearCart }) => {
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            displayName: snapShot.data().displayName,
            emailId: snapShot.data().email,
            createDate: snapShot.data().createdDate,
          });
        });
      }
      //getting the userAuth
      setCurrentUser(userAuth);
      if (!userAuth) {
        ClearCart();
      }
    });
  }, [setCurrentUser, ClearCart]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route path="/checkout" component={CheckOut} />
        <Route
          path="/SignIn"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignOut />)}
        />
      </Switch>
    </div>
  );
};

//this is used for mapping the state to props in redux.
const mapStateToProps = createStructuredSelector({
  currentUser: userSelector,
});

//this is used for an action method in redux.
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => {
    dispatch(setCurrentUser(user));
  },
  ClearCart: () => {
    dispatch(ClearCart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
