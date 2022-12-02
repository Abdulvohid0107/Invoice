import { createSlice } from "@reduxjs/toolkit"

// bozorga Reducer oqali ulab qo'yiladi
export const {actions: userActions, reducer: userReducer} = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    setUser: (state, {payload}) => {
      state.user = payload  
    }
  }
})