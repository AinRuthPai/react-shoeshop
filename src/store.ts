import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartStore = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state: any, action: any) {
      const newItem = action.payload;
      const checkItem = state.find((item: any) => item.id === newItem.id);

      if (!checkItem) {
        state.push(action.payload);
      } else {
        checkItem.count++;
      }
    },

    removeItem(state, action) {
      state.splice(
        state.findIndex((item: any) => item.id === action.payload.id),
        1
      );
    },

    addCount(state: any, action: any) {
      state[action.payload].count++;
    },

    removeCount(state: any, action: any) {
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
    login(state: any, action: any) {
      state.push(action.payload);
      console.log(action.payload);
    },
  },
});

export const { addCount, removeCount, addItem, removeItem }: any = cartStore.actions;
export const { login }: any = loginStore.actions;

export default configureStore({
  reducer: {
    cart: cartStore.reducer,
    login: loginStore.reducer,
  },
});
