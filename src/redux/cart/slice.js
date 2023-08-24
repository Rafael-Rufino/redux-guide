import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  currentPage: 1,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );
      state.products = productIsAlreadyInCart
        ? state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        : [
            ...state.products,
            {
              ...action.payload,
              quantity: 1,
            },
          ];
    },
    increaseProductQuantity: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    decreaseProductQuantity: (state, action) => {
      state.products = state.products
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  addProductToCart,
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProduct,
  changePage,
} = cartSlice.actions;

export default cartSlice.reducer;
