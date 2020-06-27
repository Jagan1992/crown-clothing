import React from "react";
import SHOP_DATA from "./shopdata.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map((collection) => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}

export default Shop;
