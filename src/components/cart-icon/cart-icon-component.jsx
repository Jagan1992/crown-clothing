import React from "react";
import { connect } from "react-redux";
import { HideCart } from "../../reducer/cart-reducer/cart-actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";

const CartIcon = ({ HideCart }) => {
  return (
    <div className="cart-icon" onClick={HideCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

//this is used for an action method in redux.
const mapDisPatchToProps = (dispatch) => ({
  HideCart: () => {
    dispatch(HideCart());
  },
});

export default connect(null, mapDisPatchToProps)(CartIcon);
