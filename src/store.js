import { configureStore, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", price: 160000, count: 1 },
    // { id: 2, name: "Grey Yordan", price: 130000, count: 1 },
  ],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    addCount(state, action) {
      state[action.payload].count++;
    },
    removeCount(state, action) {
      if (state[action.payload].count > 1) {
        state[action.payload].count--;
      } else {
        state[action.payload].count = 1;
      }
    },
  },
});

export const { addCount } = cart.actions;
export const { removeCount } = cart.actions;
export const { addItem } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
