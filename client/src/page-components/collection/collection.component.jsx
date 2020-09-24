import React from "react";
import CollectionItem from "../../components/collection-item/collection-item";
import { connect } from "react-redux";
import { selectCollection } from "../../reducer/shop-reducer/shop.selectors";
import "./collection.style.scss";

const Collection = ({ collections }) => {
  const { title, items } = collections;
  return (
    <div className="collection-page">
      <div className="card">
        <div className="card-header">
          <div className="font-weight-bold title">{title.toUpperCase()}</div>
        </div>
        <div className="card-body">
          <div className="items">
            {items.map((item) => (
              <CollectionItem key={item.id} item={item} rowDiv="row mx-md-n3" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  collections: selectCollection(props.match.params.collectionType)(state),
});

export default connect(mapStateToProps, null)(Collection);
