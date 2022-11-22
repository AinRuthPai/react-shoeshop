import { configureStore, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      state.splice(
        state.findIndex((item) => item.id === action.payload.id),
        1
      );
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
export const { removeItem } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
