import React from "react";
import "./cart-item.style.scss";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt="item"></img>
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="price">
          {item.quantity} x {item.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
