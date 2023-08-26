import CartActionTypes from "./action-types";

const saveToLocalStorage = (products) => {
  localStorage.setItem("cart", JSON.stringify(products));
};

const loadFromLocalStorage = () => {
  const savedProducts = localStorage.getItem("cart");
  return savedProducts ? JSON.parse(savedProducts) : [];
};

const initialState = {
  products: loadFromLocalStorage(),
  currentPage: 1,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT_T0_CART:
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );
      const updatedProducts = productIsAlreadyInCart
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

      saveToLocalStorage(updatedProducts);
      console.log("colosooooodddddddddddddddd", { updatedProducts });

      return {
        ...state,
        products: updatedProducts,
      };

    case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0),
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    case CartActionTypes.CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};
export default cartReducer;
