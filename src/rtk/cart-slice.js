import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const existProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (existProduct) {
        existProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter(function (product) {
        return product.id !== action.payload.id;
      });
    },
    incrementQuantity: (state, action) => {
      const existProduct = state.find(
        (product) => product.id === action.payload.id
      );
      existProduct.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const existProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (!(existProduct.quantity === 1)) {
        existProduct.quantity -= 1;
      }
    },
  },
});
export const {
  addToCart,
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
