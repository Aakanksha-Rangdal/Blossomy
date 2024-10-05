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
    removeItemFromCart: (state, data) => {
      const filtered_data = state.data.filter(
        (item) => lower(item.title) != lower(data.title)
      );
      state.data = filtered_data;
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
