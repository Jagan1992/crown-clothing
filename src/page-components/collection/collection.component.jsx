import React from "react";
//import CollectionItem from "../../components/collection-item/collection-item";
import { connect } from "react-redux";
import { selectCollection } from "../../reducer/shop-reducer/shop.selectors";
//import { createStructuredSelector } from "reselect";
import "./collection.style.scss";

const Collection = ({ collections }) => {
  console.log(collections);
  return (
    <div className="collection-page">
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  collections: selectCollection(props.match.params.collectionType)(state),
});

export default connect(mapStateToProps, null)(Collection);
