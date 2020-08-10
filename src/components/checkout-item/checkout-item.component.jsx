import React from "react";
import "./checkout-tem.style.scss";

const CheckOutItem = ({ cartItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="item"></img>
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">{cartItem.quantity}</span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckOutItem;
