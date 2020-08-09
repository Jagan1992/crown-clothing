import React from "react";
import { connect } from "react-redux";
import { HideCart } from "../../reducer/cart-reducer/cart-actions";
import { selectCartItemsCount } from "../../reducer/cart-reducer/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";

const CartIcon = ({ HideCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={HideCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

//this is used for an action method in redux.
const mapDisPatchToProps = (dispatch) => ({
  HideCart: () => {
    dispatch(HideCart());
  },
});

//this is used for mapping the state to props in redux.
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDisPatchToProps)(CartIcon);
