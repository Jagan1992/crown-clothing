import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { ReactComponent as LogoCrown } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon-component";
import "./header-component.style.scss";

const Header = ({ currentUser }) => {
  return (
    <div className="container">
      <div className="header">
        <Link to="/" className="logo-container">
          <LogoCrown className="logo" />
        </Link>
        <div className="options">
          <Link exact to="/shop" className="font-weight-bold text-dark option">
            SHOP
          </Link>
          <Link to="/contact" className="font-weight-bold text-dark option">
            CONTACT
          </Link>
          {currentUser ? (
            <div className="font-weight-bold text-dark option">
              Hi ,
              <span className="px-2 text-transform">
                {currentUser.displayName}
              </span>
            </div>
          ) : (
            ""
          )}
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
