import { takeLatest, fork } from 'redux-saga/effects';

import {testSaga} from '../../test_to_be_deleted/saga';

export default function*() {
  yield [
    fork(testSaga)
  ]
}
