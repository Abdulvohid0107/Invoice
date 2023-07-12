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
      setError: (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      },
      addInvoice: (state, { payload }) => {
        if (state.invoicesList) {
          state.invoicesList = [...state.invoicesList, payload];
        }
      },
      deleteInvoice: (state, { payload }) => {
        const invoicesList = state.invoicesList;

        const deletingItemIndex = invoicesList?.findIndex(
          (invoicesItem) => invoicesItem.id === +payload
        );
        state.invoicesList = [
          ...invoicesList.slice(0, deletingItemIndex),
          ...invoicesList.slice(deletingItemIndex + 1),
        ];
      },

      editInvoice: (state, { payload }) => {
        state.loading = false;
        const invoicesList = state.invoicesList;
        if (invoicesList) {
          const editingItemIndex = invoicesList.findIndex(
            (invoicesItem) => invoicesItem.id === payload.id
          );
          state.invoicesList = [
            ...invoicesList.slice(0, editingItemIndex),
            payload,
            ...invoicesList.slice(editingItemIndex + 1),
          ];
        }
      },
    },
  });
