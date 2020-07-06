import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoCrown } from "../../assets/crown.svg";
import "./header-component.style.scss";

const Header = () => {
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
          <Link to="/signin" className="font-weight-bold text-dark option">
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
