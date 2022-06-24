import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectSelf = (state: any) => state;

export const getCheckoutFetching = createDraftSafeSelector(
  selectSelf,
  (state) => state.checkout.fetching
);

export const getCheckoutCurrency = createDraftSafeSelector(
  selectSelf,
  (state) => state.checkout.checkout.currency,
);

export const getCheckoutCurrencySymbol = createDraftSafeSelector(
  selectSelf,
  (state) => state.checkout.checkout.currency_symbol,
);

export const getCheckoutInstallments = createDraftSafeSelector(
  selectSelf,
  (state) => state.checkout.checkout.installments,
);

export const getCheckoutItems = createDraftSafeSelector(
  selectSelf,
  (state) => state.checkout.checkout.items,
);

export const getCheckoutTotalPrice = createDraftSafeSelector(
  selectSelf,
  (state) => state.checkout.checkout.total_price,
);

export const getCheckoutShopName = createDraftSafeSelector(
  selectSelf,
  (state) => state.checkout.shop_name,
);

