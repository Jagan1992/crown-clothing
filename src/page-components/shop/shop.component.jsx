import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../collection/collection.component";
import { connect } from "react-redux";
import { fetchCollectionAsync } from "../../reducer/shop-reducer/shop-actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from "../../reducer/shop-reducer/shop.selectors";
import { createStructuredSelector } from "reselect";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionAsync } = this.props;

    fetchCollectionAsync();
  }

  render() {
    const { match, isFetching, isCollectionLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionType`}
          render={(props) => (
            <CollectionWithSpinner isLoading={!isCollectionLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
});

const mapDisPatchToProps = (dispatch) => ({
  fetchCollectionAsync: () => dispatch(fetchCollectionAsync()),
});

export default connect(mapStateToProps, mapDisPatchToProps)(Shop);
