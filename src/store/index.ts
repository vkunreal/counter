import { countersReducer } from "./counters/reducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  counters: countersReducer,
});

export const store = createStore(rootReducer);
