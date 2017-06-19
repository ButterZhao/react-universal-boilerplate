import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

// console.log(visibilityFilter);
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
