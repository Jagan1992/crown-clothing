import React from "react";
//import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { ReactComponent as LogoCrown } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon-component";
import CartDropDown from "../../components/cart-drop-down/card-drop-down-component";
import { userSelector } from "../../reducer/user-reducer/user.selector";
import { selectCartHidden } from "../../reducer/cart-reducer/cart.selectors";
//we can configure all the selectors here.
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./header.styled.component";
import "./header-component.style.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="container">
      <HeaderContainer>
        <LogoContainer to="/">
          <LogoCrown className="logo" />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop" className="font-weight-bold text-dark">
            SHOP
          </OptionLink>
          <OptionLink to="/contact" className="font-weight-bold text-dark">
            CONTACT
          </OptionLink>
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
            <OptionDiv
              className="font-weight-bold text-dark"
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </OptionDiv>
          ) : (
            <OptionLink to="/signin" className="font-weight-bold text-dark">
              SIGN IN
            </OptionLink>
          )}
          <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropDown />}
      </HeaderContainer>
    </div>
  );
};

//this is used for mapping the state to props in redux.
const mapStateToProps = createStructuredSelector({
  currentUser: userSelector,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
