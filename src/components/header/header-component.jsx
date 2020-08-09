import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { ReactComponent as LogoCrown } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon-component";
import CartDropDown from "../../components/cart-drop-down/card-drop-down-component";
import { userSelector } from "../../reducer/user-reducer/user.selector";
import { selectCartHidden } from "../../reducer/cart-reducer/cart.selectors";
//we can configure all the selectors here to create a new selector.
import { createStructuredSelector } from "reselect";
import "./header-component.style.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="container">
      <div className="header">
        <Link to="/" className="logo-container">
          <LogoCrown className="logo" />
        </Link>
        <div className="options">
          <Link to="/shop" className="font-weight-bold text-dark option">
            SHOP
          </Link>
          <Link to="/contact" className="font-weight-bold text-dark option">
            CONTACT
          </Link>
          {/*currentUser ? (
            <div className="font-weight-bold text-dark option">
              WELCOME ,
              <span className="px-2 text-transform">
                {currentUser.displayName}
              </span>
            </div>
          ) : (
            ""
          )*/}
          {currentUser ? (
            <div
              className="font-weight-bold text-dark option"
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </div>
          ) : (
            <Link to="/signin" className="font-weight-bold text-dark option">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {hidden ? null : <CartDropDown />}
      </div>
    </div>
  );
};

//this is used for mapping the state to props in redux.
const mapStateToProps = createStructuredSelector({
  currentUser: userSelector,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
