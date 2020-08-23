import React from "react";
import StripeCheckout from "react-stripe-checkout";
import STRIPE_INFO from "./stripe-publish-key";
import "./stripe-button.style.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
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

export default StripeCheckoutButton;
