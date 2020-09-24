//For Adding Item.
export const AddItemToCart = (cartItems, cartItemsToAdd) => {
  //for checking the cartItem record and cartItemsToAdd have the existing record.
  const checkItemExist = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );

  //check if the existing record
  if (checkItemExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

//For Removing Item.
export const RemoveItemFromCart = (cartItems, cartItemsToRemove) => {
  const checkItemExist = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToRemove.id
  );

  //remove the Item from cart if the quantity is 1.
  if (checkItemExist.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemsToRemove.id);
  }

  //decreasing the same Item from cart.
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemsToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
