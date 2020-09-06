import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../collection/collection.component";
import {
  fireStore,
  convertCollectionSnapShotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../reducer/shop-reducer/shop-actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  state = {
    loading: true,
  };

  unSubcribeAuth = null;

  componentDidMount() {
    const collectionRef = fireStore.collection("collections");
    const { updateCollections } = this.props;

    this.unSubcribeAuth = collectionRef.onSnapshot(async (snapShot) => {
      const collectionsMap = convertCollectionSnapShotToMap(snapShot);
      updateCollections(collectionsMap);
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionType`}
          render={(props) => (
            <CollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDisPatchToProps = (disPatch) => ({
  updateCollections: (collectionsMap) =>
    disPatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDisPatchToProps)(Shop);
