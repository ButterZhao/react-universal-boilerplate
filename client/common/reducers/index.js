// Root reducer for redux, you should combine your sepreate reducer into this one.

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import test from '../../test_to_be_deleted/reducer';// TODO this should be deleted, since it is for test

const rootReducer = combineReducers({
  routing: routerReducer,
  test   // TODO this should be deleted, since it is for test
});

export default rootReducer;
