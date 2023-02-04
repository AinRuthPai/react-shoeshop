import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { User } from "./db/User";

const cartSlice = createSlice({
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

const loginSlice = createSlice({
  name: "login",
  initialState: [],
  reducers: {
    login(state: any, action: any) {
      state.push(action.payload);
      axios
        .post("http://localhost:5000/signup", {
          email: action.payload.email,
          password: action.payload.password,
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    },
  },
});

export const { addCount, removeCount, addItem, removeItem }: any = cartSlice.actions;
export const { login }: any = loginSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    login: loginSlice.reducer,
  },
});

export default store;
