import { takeLatest, put } from 'redux-saga/effects';

import { sagaAction } from './action';
import { ACTION_TEST } from './constants';

function* test (action){
  yield put(sagaAction());
}

export function* testSaga (action){
  yield [
    takeLatest(ACTION_TEST, test)
  ];
}
