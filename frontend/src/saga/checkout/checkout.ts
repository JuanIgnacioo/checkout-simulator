import { AxiosResponse } from "axios";
import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";

import { actions } from "../../redux/checkout/actions";
import * as CheckoutService from "../../services/checkout/checkout";

import { CheckoutResponseType } from "../../services/checkout/types";

export function* getCheckout(
  action: any
): Generator<
  | CallEffect<AxiosResponse<CheckoutResponseType>>
  | PutEffect<{ type: string }>
  | CallEffect<void>,
  void,
  CheckoutResponseType
> {
  const response = yield call(
    CheckoutService.getCheckoutFetching,
    action.payload
  );
  if (response.status !== 200) {
    if (response.status === 500) {
      yield put(actions.getCheckoutError(true));
      //   $alerts.next({
      //     type: 'error',
      //     title: i18next.t('RolesByApplicationService:errorGeneralTitle'),
      //     subMessage: i18next.t('RolesByApplicationService:errorGeneralBody'),
      //   });
    } else {
      yield put(actions.getCheckoutError(false));
    }
  } else {
    const { data } = response;
    yield put(actions.getCheckoutSuccess(data));
  }
}

const sagas: ForkEffect<never>[] = [
  takeLatest(actions.getCheckoutRequest.type, getCheckout),
];

export default sagas;
