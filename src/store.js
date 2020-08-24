import { counter } from "./reducers";
import { createStore } from "redux";

// 1. Default State
const defaultState = {
  checking: 10,
  savings: 2,
};

// 4. create the store
export const store = createStore(counter, defaultState);
