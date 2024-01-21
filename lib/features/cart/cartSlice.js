import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementOderCount: (state, action) => {
      const product = state.find(({ id }) => id === action.payload.id);
      if (product) product.orderCount += 1;
    },
    decrementOrderCount: (state, action) => {
      const product = state.find(({ id }) => id === action.payload.id);
      if (product.orderCount > 1) product.orderCount -= 1;
    },
    removeItem: (state, action) => {
      return state.filter(({ id }) => id !== action.payload.id);
    },
    addItem: (state, action) => {
      const product = state.find(({ id }) => id === action.payload.id);
      if (product) {
        product.orderCount += 1;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { incrementOderCount, decrementOrderCount, removeItem, addItem } = cartSlice.actions;

export default cartSlice.reducer;
