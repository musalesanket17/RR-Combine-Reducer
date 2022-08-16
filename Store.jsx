import { combineReducers, legacy_createStore } from "redux";
import { CounterReducer } from "./Redux/counterReducer";
import { TodoReducer } from "./Redux/TodoReducer";

const Reducer = combineReducers({
  count: CounterReducer,
  todo: TodoReducer
});

export const store = legacy_createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
