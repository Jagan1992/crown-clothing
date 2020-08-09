//reselect is a Library which is used changes will be occured when ever the state changes.
import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

//getting the cartItems.
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

//getting the total cartItems count.
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity,
      0
    )
);
