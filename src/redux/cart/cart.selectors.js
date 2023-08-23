export const selectCartProducts = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
};

export const selectProductsTotalPrice = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
};
