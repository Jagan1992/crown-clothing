import React from "react";
import "./collection-preview.style.scss";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="font-weight-bold title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.map((item) => (
          <CollectionItem
            key={item.id}
            itemName={item.name}
            imageUrl={item.imageUrl}
            itemPrice={item.price}
          ></CollectionItem>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
