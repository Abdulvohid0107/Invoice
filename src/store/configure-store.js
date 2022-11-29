import { configureStore } from "@reduxjs/toolkit";
import { invoicesReducer } from "./invoices";

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer
  }
})