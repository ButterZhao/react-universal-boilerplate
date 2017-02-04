import { ajax, get } from '../shared/utils';

const getTestData = () => {
  // return ajax({
  //   url: '/api/test/getTestData',
  //   type: 'get'
  // })
  return get('/api/test/getTestData')
}

export default {
  getTestData
}
