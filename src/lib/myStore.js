import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";
import { middleware } from "../navigation/containers";
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

let logger = createLogger({
  timestamps: true,
  duration: true
});

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk, middleware),
    offline(offlineConfig)));

export default store;
