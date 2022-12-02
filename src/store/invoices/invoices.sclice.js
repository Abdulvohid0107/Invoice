import { createSlice } from "@reduxjs/toolkit";

export const { actions: invoicesActions, reducer: invoicesReducer } =
  createSlice({
    name: "invoices",
    initialState: {
      loading: false,
      error: null,
      invoicesList: null,
    },
    reducers: {
      setLoading: (state) => {
        state.loading = true;
      },
      setInovices: (state, action) => {
        state.loading = false;
        state.invoicesList = action.payload;
      },
      setError: (state, {payload}) => {
        state.error = payload;
        state.loading = false
      },
      addInvoice: (state, {payload}) => {
        if (state.invoicesList) {
          state.invoicesList = [...state.invoicesList, payload]
        }
      }
    },
  });
