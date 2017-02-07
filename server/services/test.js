import { get } from '../shared/utils';

function testService() {
  // call mock server
  return get('/tests');
}

export default {
  testService
};
