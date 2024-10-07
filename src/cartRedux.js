import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      if (
        // Checking if the same title exists in the cart to escape if already exists
        !state.data.some(
          (item) =>
            item.title.toLowerCase() == action.payload.title.toLowerCase()
        )
      ) {
        state.data = [...state.data, action.payload];
      }
    },
    updateCartItem: (state, data) => {
      if (data.payload.action == "add") {
        const updatedItems = state.data.map((item) => {
          if (item.title.toLowerCase() == data.payload.title.toLowerCase()) {
            item.quantity += 1;
            return item;
          }
          return item;
        });
        state.data = updatedItems;
      } else {
        const updatedItems = state.data.map((item) => {
          if (item.title.toLowerCase() == data.payload.title.toLowerCase()) {
            item.quantity = item.quantity > 1 ? item.quantity - 1 : 1;
            return item;
          }
          return item;
        });
        state.data = updatedItems;
      }
    },
    removeItemFromCart: (state, data) => {
      const filtered_data = state.data.filter(
        (item) => item.title.toLowerCase() != data.payload.toLowerCase()
      );
      state.data = filtered_data;
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
