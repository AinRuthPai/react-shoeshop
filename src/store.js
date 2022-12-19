import { configureStore, createSlice, current } from "@reduxjs/toolkit";

const cartStore = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const checkItem = state.find((item) => item.id === newItem.id);

      if (!checkItem) {
        state.push(action.payload);
      } else {
        checkItem.count++;
      }
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

const loginStore = createSlice({
  name: "login",
  initialState: [],
  reducers: {
    login(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
  },
});

export const { addCount, removeCount, addItem, removeItem } = cartStore.actions;
export const { login } = loginStore.actions;

export default configureStore({
  reducer: {
    cart: cartStore.reducer,
    login: loginStore.reducer,
  },
});
