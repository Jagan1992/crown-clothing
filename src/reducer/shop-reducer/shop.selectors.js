import { createSelector } from "reselect";

const selectShopData = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShopData],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopItems],
    (collections) => collections[collectionUrlParam]
  );
