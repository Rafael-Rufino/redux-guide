const addProductToCart = (payload) => ({
  type: "cart/addProductToCart",
  payload,
});

const increaseProductQuantity = (payload) => ({
  type: "cart/increaseProductQuantity",
  payload,
});

const decreaseProductQuantity = (payload) => ({
  type: "cart/decreaseProductQuantity",
  payload,
});

const removeProduct = (payload) => ({
  type: "cart/removeProduct",
  payload,
});

export {
  addProductToCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProduct,
};
