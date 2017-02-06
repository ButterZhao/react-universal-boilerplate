// Root saga for redux saga. you should add your saga watcher into this one, like testSaga.

import { fork } from 'redux-saga/effects';

import testSaga from '../../test_to_be_deleted/saga'; // TODO this should be deleted, since it is for test

export default function* () {
  yield [
    fork(testSaga)   // TODO this should be deleted, since it is for test
  ];
}
