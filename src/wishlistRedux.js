import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, action) => {
      if (
        // Checking if the same title exists in the Wishlist to escape if already exists
        !state.data.some(
          (item) =>
            item.title.toLowerCase() == action.payload.title.toLowerCase()
        )
      ) {
        state.data = [...state.data, action.payload];
      }
    },
    removeItemFromWishlist: (state, data) => {
      console.log(data);
      const filtered_data = state.data.filter(
        (item) => item.title.toLowerCase() != data.payload.toLowerCase()
      );
      state.data = filtered_data;
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
