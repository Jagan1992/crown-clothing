import React from "react";
import "./collection-item.style.scss";

const CollectionItem = ({ itemName, imageUrl, itemPrice }) => {
  return (
    <div className="row mx-md-n5">
      <div className="col px-md-5">
        <div className="p-3 border bg-light">
          <div className="collection-item light-container">
            <div
              className="image"
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            ></div>
            <div className="collection-footer">
              <span className="font-weight-bold name">{itemName}</span>
              <span className="font-weight-bold">${itemPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
