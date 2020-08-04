import { CartActionTypes } from "./cart-action-types";

export const HideCart = () => ({
  type: CartActionTypes.HIDE_CART,
});

export const AddItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
