import React from "react";
import "./collection-preview.style.scss";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <div className="card">
        <div className="card-header">
          <h1 className="font-weight-bold title">{title.toUpperCase()}</h1>
        </div>
        <div className="card-body">
          <div className="preview">
            {items
              .filter((itm, idx) => idx < 4)
              .map((item) => (
                <CollectionItem
                  key={item.id}
                  itemName={item.name}
                  imageUrl={item.imageUrl}
                  itemPrice={item.price}
                ></CollectionItem>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview;
