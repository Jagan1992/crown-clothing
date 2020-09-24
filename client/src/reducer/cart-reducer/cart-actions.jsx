import { CartActionTypes } from "./cart-action-types";

export const HideCart = () => ({
  type: CartActionTypes.HIDE_CART,
});

export const AddItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const RemoveItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const ClearItem = (item) => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item,
});

export const ClearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
