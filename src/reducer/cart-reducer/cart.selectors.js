//reselect is a Library which is used changes will be occured when ever the state.
//cart-selector.
import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

//getting the cartItems.
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

//getting the cart-drop-down hidden type
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
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
