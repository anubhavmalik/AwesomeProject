import {ADD_TODO, REMOVE_TODO} from '../actions/types';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  console.log(
    state,

    // ...state,
  );
  console.log('action is ');

  console.log(action);

  switch (action.type) {
    case ADD_TODO:
      return {
        ...state.todos,
        todos: state.todos.concat({
          key: new Date().getMilliseconds().toString(),
          data: action.data,
        }),
      };
    case REMOVE_TODO:
      return {
        ...state.todos,
        todos: state.todos.filter((todo) => todo.key !== action.key),
      };

    default:
      return state;
  }
};

export default todoReducer;
