import { createSlice } from "@reduxjs/toolkit";
import { CheckoutState } from "./types";

export const initialState: CheckoutState = {
  checkout: {
    currency: "",
    currency_symbol: "",
    installments: [],
    items: [],
    total_price: 0,
    total_price_accessibility: "",
  },
  shop_name: "",
  fetching: false,
  error: "",
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,

  reducers: {
    getCheckoutRequest(state, action) {
      state.fetching = true;
    },
    getCheckoutSuccess(state, action) {
      state.checkout.currency = action.payload[0].attributes.currency;
      state.checkout.currency_symbol =
        action.payload[0].attributes.currency_symbol;
      state.checkout.installments = action.payload[0].attributes.installments;
      state.checkout.items = action.payload[0].attributes.items;
      state.checkout.total_price = action.payload[0].attributes.total_price;
      state.checkout.total_price_accessibility =
        action.payload[0].attributes.total_price_accessibility;
      state.shop_name = action.payload[0].shop_name;
      state.fetching = false;
    },
    getCheckoutError(state, action) {
      state.error = action.payload.error;
    },
    updateTotalPrice(state, action) {
      state.checkout.total_price = action.payload.price;
    },
  },
  extraReducers: {},
});

export const { actions } = checkoutSlice;

export default checkoutSlice.reducer;
