import { createSlice } from "@reduxjs/toolkit";

// bozorga Reducer oqali ulab qo'yiladi
export const { actions: userActions, reducer: userReducer } = createSlice({
  name: "user",
  initialState: {
    user:
      localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")),
    token: localStorage.getItem("token"), // local storage'ga token degan narsani saqlab qo'yamiz
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.accessToken;
      localStorage.setItem("token", payload.accessToken);
      localStorage.setItem("user", JSON.stringify(payload.user));
    },
  },
});
