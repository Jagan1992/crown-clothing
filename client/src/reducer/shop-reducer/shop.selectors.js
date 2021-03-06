import { createSelector } from "reselect";

const selectShopData = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShopData],
  (shop) => shop.collections
);

//function for converting the object collections to Array.
export const selectObjectToArray = createSelector([selectShopData], (shop) =>
  shop.collections
    ? Object.keys(shop.collections).map((key) => shop.collections[key])
    : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopItems], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShopData],
  (shop) => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShopData],
  (shop) => Boolean(shop.collections)
);
