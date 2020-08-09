import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { selectCartItems } from "../../reducer/cart-reducer/cart.selectors";
//we can configure all the selectors here.
import { createStructuredSelector } from "reselect";
import "../cart-drop-down/card-drop-down.styles.scss";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="collection-item light-container">
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
      </div>
      <CustomButton
        type="button"
        value="GO TO CHECKOUT"
        className="custom-button mr-4 btn"
      />
    </div>
  );
};

//this is used for mapping the state to props in redux.
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, null)(CartDropDown);
