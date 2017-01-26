import { combineReducers } from 'redux';
import { routerReducer, LOCATION_CHANGE } from 'react-router-redux';

import test from '../../test_to_be_deleted/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  test
});

export default rootReducer;
