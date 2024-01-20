import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from "../../../products";

const initialState = PRODUCTS;

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const product = state.find(({ id }) => id === action.id);
      product.isFavorite = true;
    },
    removeFromFavorites: (state) => {
      const product = state.find(({ id }) => id === action.id);
      product.isFavorite = false;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = productsSlice.actions;

export default productsSlice.reducer;
