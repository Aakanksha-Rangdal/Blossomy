import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux.js";
import wishlistReducer from "./wishlistRedux.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
