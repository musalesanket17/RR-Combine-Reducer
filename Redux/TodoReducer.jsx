import { ADD_TODO } from "./TodoAction";

const TodoState = {
  todo: []
};

export const TodoReducer = (state = TodoState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload]
      };

    default:
      return state;
  }
};
