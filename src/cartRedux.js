import { createSlice } from "@reduxjs/toolkit";
import cartData from "/data/cart.json";

const initialState = {
  data: [
    {
      title: "lilies in bloom",
      description:
        "Elegant lilies in full bloom, offering a delightful fragrance and graceful beauty. A perfect centerpiece for your home or event.",
      image: "/src/assets/3.jpg",
      price: "$12.49",
      itemCount: 1,
    },
  ],
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
      console.log(data);
      const filtered_data = state.data.filter(
        (item) => item.title.toLowerCase() != data.payload.toLowerCase()
      );
      state.data = filtered_data;
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
