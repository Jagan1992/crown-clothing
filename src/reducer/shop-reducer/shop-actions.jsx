import { ShopActionTypes } from "./shop-action-types";
import {
  fireStore,
  convertCollectionSnapShotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionAsync = () => {
  return (dispatch) => {
    const collectionRef = fireStore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then((response) => {
        const collectionsMap = convertCollectionSnapShotToMap(response);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch((error) => {
        dispatch(fetchCollectionFailure(error.message));
      });
  };
};
