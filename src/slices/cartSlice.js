import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let found = state.cart.some((cart_p) => cart_p.id === action.payload.id);
      if (found) {
        let toUpdate = state.cart.filter(
          (cart_p) => cart_p.id === action.payload.id
        );
        toUpdate[0].quantity += action.payload.quantity;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    removeToCart: (state, action) => {
      let toUpdate = state.cart.filter(
        (cart_p) => cart_p.id !== action.payload.id
      );
      state.cart = toUpdate;
    },
    increaseQuantity: (state, action) => {
      console.log("Action", action.payload);
      const iteam = state.cart.findIndex(
        (cart) => cart.id === action.payload.id
      );
      if (state.cart[iteam].quantity >= 1) {
        state.cart[iteam].quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const iteam = state.cart.findIndex(
        (cart) => cart.id === action.payload.id
      );
      if (state.cart[iteam].quantity > 1) {
        state.cart[iteam].quantity--;
      }
    },
    totalChecker: (state, action) => {
      state.total = action.payload;
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeToCart,
  increaseQuantity,
  decreaseQuantity,
  totalChecker,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
