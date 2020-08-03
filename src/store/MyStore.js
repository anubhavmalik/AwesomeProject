import {createStore, combineReducers} from 'redux';
import TodoListReducer from '../reducers/TodoListReducer';

const rootReducer = combineReducers({
  todos: TodoListReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
