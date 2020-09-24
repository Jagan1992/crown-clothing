import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectObjectToArray } from "../../reducer/shop-reducer/shop.selectors";
import { createStructuredSelector } from "reselect";
import "./collection-overview.style.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
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
  collections: selectObjectToArray,
});

export default connect(mapStateToProps, null)(CollectionOverview);
