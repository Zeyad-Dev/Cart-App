import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../rtk/products-slice";
import cartReducer from "../rtk/cart-slice";
export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: cartReducer,
  },
});
