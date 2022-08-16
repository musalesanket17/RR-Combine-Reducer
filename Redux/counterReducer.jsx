import { DECREMENT, INCREMENT } from "./counterAction";

const initCounter = {
  count: 0
};
export const CounterReducer = (state = initCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};
