import createSagaMiddleware from "@redux-saga/core";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import checkout from "./checkout/actions";
import rootSaga from "../saga/index";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  checkout,
});
const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
const enhancers = [];

middlewares.push(sagaMiddleware);

enhancers.push(applyMiddleware(...middlewares));

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, composeEnhancers(...enhancers));

sagaMiddleware.run(rootSaga);
