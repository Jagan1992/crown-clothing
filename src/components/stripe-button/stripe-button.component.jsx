import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import STRIPE_INFO from "./stripe-publish-key";
import "./stripe-button.style.scss";
import { ClearCart } from "../../reducer/cart-reducer/cart-actions";

const StripeCheckoutButton = ({ price, ClearCart }) => {
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    ClearCart();
  };

  return (
    <div>
      <StripeCheckout
        name="NETSCAPE Designers Ltd."
        billingAddress
        shippingAddress
        image={STRIPE_INFO.IMAGE_URL}
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        stripeKey={STRIPE_INFO.PUBLISH_KEY}
        token={onToken}
        className={price === 0 ? "stripe-button-el" : ""}
      />
    </div>
  );
};

const mapDisPatchToProps = (dispatch) => ({
  ClearCart: () => {
    dispatch(ClearCart());
  },
});

export default connect(null, mapDisPatchToProps)(StripeCheckoutButton);
