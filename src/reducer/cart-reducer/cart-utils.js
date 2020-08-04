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
