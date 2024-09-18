import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./components/products/productSlice";
import cartReducers from "./components/cart/cartSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    item: cartReducers,
  },
});
