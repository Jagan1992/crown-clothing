import React from "react";
import { connect } from "react-redux";
import { AddItem } from "../../reducer/cart-reducer/cart-actions";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.style.scss";

const CollectionItem = ({ item, AddItem }) => {
  return (
    <div className="row mx-md-n5">
      <div className="col px-md-5">
        <div className="p-3 border bg-light">
          <div className="collection-item light-container">
            <div
              className="image"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            ></div>
            <div className="collection-footer">
              <span className="font-weight-bold name">{item.name}</span>
              <span className="font-weight-bold">${item.price}</span>
            </div>
            <CustomButton
              type="button"
              value="Add to Cart"
              className="inverted custom-button mr-4 btn"
              handleClick={() => AddItem(item)}
            ></CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

//this is used for an action method in redux.
const mapDispatchToProps = (dispatch) => ({
  AddItem: (item) => {
    dispatch(AddItem(item));
  },
});

export default connect(null, mapDispatchToProps)(CollectionItem);
