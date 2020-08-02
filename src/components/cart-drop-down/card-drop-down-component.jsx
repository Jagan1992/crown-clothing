import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import "../cart-drop-down/card-drop-down.styles.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton
        type="button"
        value="GO TO CHECKOUT"
        className="custom-button mr-4 btn"
      />
    </div>
  );
};

export default CartDropDown;
