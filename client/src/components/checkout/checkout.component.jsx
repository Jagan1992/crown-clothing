import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../reducer/cart-reducer/cart.selectors";
import CheckOutItem from "../checkout-item/checkout-item.component";
import StripeCheckoutButton from "../stripe-button/stripe-button.component";
import "./checkout.style.scss";

const CheckOut = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span className="font-weight-bold">Product</span>
        </div>
        <div className="header-block">
          <span className="font-weight-bold">Description</span>
        </div>
        <div className="header-block">
          <span className="font-weight-bold">Quantity</span>
        </div>
        <div className="header-block">
          <span className="font-weight-bold">Price</span>
        </div>
        <div className="header-block">
          <span className="font-weight-bold">Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span className="total font-weight-bold">Total : ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        Card No: 5555 5555 5555 4444 - Exp Date: 05/23(Any Future Date) -
        CVV:123(Any CVV)
        <br />
        Please select the payment type: USD since it supports only USD payments
        for testing.
      </div>
      <StripeCheckoutButton className="stripe-button" price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps, null)(CheckOut);
