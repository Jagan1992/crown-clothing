import React from "react";
import { connect } from "react-redux";
import {
  AddItem,
  RemoveItem,
  ClearItem,
} from "../../reducer/cart-reducer/cart-actions";
import "./checkout-tem.style.scss";

const CheckOutItem = ({ cartItem, AddItem, RemoveItem, ClearItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="item"></img>
      </div>
      <span className="font-weight-bold name">{cartItem.name}</span>
      <span className="font-weight-bold quantity">
        <div className="arrow" onClick={() => RemoveItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={() => AddItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="font-weight-bold price">{cartItem.price}</span>
      <div
        className="remove-button font-weight-bold"
        onClick={() => ClearItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDisPatchToProps = (dispatch) => ({
  AddItem: (item) => {
    dispatch(AddItem(item));
  },
  RemoveItem: (item) => {
    dispatch(RemoveItem(item));
  },
  ClearItem: (item) => {
    dispatch(ClearItem(item));
  },
});

export default connect(null, mapDisPatchToProps)(CheckOutItem);
