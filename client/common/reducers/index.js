// Root reducer for redux, you should combine your sepreate reducer into this one.

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todoApp from '../../TodoList/reducers';

const rootReducer = combineReducers({
  routing: routerReducer,
  todoApp   // TODO this should be deleted, since it is for test
});

export default rootReducer;
