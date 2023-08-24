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

const changePage = (payload) => ({
  type: "cart/changePage",
  payload,
});

export {
  addProductToCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProduct,
  changePage,
};
