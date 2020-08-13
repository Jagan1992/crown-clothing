import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { selectShopItems } from "../../reducer/shop-reducer/shop.selectors";
import { createStructuredSelector } from "reselect";

const Shop = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
});

export default connect(mapStateToProps, null)(Shop);
